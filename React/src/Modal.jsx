
function Modal({isOpen, onClose}) {
  return isOpen && (
    <div className="bg-black/50 h-screen fixed inset-0 justify-center 
        items-center">

        <textarea name="" id="" className="w-[100%] h-50 resize-none"></textarea>
    </div>

  )
}

export default Modal


/*
/50 sets transparency 
inset causes an overlay of the container on the page so you can't 
interact with the container until you log out of the container

import Modal from ./Modal 
function Sidebar() {
const [isModalOpen, setIsModalOpen] = useState(false)
<aside>

<button>Post</button>

</aside>
<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}

u}