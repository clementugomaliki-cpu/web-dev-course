import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import SubTrackerDashboard from "./SUBTRACKER/SubtrackerDashboard";
import SubscriptionsList from "./SUBTRACKER/SubscriptionsList";
import SubscribeForm from "./SUBTRACKER/SubscribeForm";

function App() {
  const [subscriptionsList, setSubscriptionsList] = useState(() => {
    const saved = localStorage.getItem("subscriptionsList");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("subscriptionsList", JSON.stringify(subscriptionsList));
  }, [subscriptionsList]);

  function updateSubscriptions(newSubscription) {
    setSubscriptionsList([...subscriptionsList, newSubscription]);
  }

  function daysUntilRenewal(subscribeDate) {
    const today = new Date();
    const renewal = new Date(subscribeDate);
    renewal.setDate(renewal.getDate() + 30);
    const diffTime = renewal - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  
  function getDueSoon(list) {
    return list.filter(sub => {
      const days = daysUntilRenewal(sub.subscribeDate);
      return days >= 0 && days <= 3;
    });
  }

  function deleteSubscription(index) {
  const updated = subscriptionsList.filter((_, i) => i !== index);
  setSubscriptionsList(updated);
}

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <SubTrackerDashboard
              subscriptionsList={subscriptionsList}
              dueSoon={getDueSoon(subscriptionsList)}
              daysUntilRenewal={daysUntilRenewal}
            />}
          />
          <Route path="/subscriptions-list" element={
            <SubscriptionsList
              subscriptionsList={subscriptionsList} daysUntilRenewal={daysUntilRenewal} onDelete={deleteSubscription} />}
          />
          <Route path="/add-subscriptions" element={<SubscribeForm onSubscribe={updateSubscriptions}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;