import { useState } from "react"
import { post } from "../../service/apiClient"
import useModal from "../../hooks/useModal"
import './style.css'
import Button from '../button'

const CreatePostModal = ({setTriggerUpdate, currentUserName, currentUserInitials}) => {
    const { closeModal } = useModal()

    const [message, setMessage] = useState(null)
    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        setMessage('Submit button was clicked! Closing modal in 2 seconds...')
        post('posts', {"content": text})
        .then(() => {
            setTriggerUpdate(true)
        })

        setTimeout(() => {
            setMessage(null)
            closeModal()
        }, 2000)
    }

    return (
        <>
            <section className="create-post-user-details">
                <div className="profile-icon"><p>{currentUserInitials}</p></div>
                <div className="post-user-name"><p>{currentUserName}</p></div>
            </section>

            <section>
                <textarea onChange={onChange} value={text} placeholder="What's on your mind?"></textarea>
            </section>

            <section className="create-post-actions">
                <Button
                    onClick={onSubmit}
                    text='Post'
                    classes={`${text.length ? 'blue' : 'offwhite' } width-full`}
                    disabled={!text.length}
                />
            </section>

            {message && <p>{message}</p>}
        </>
    )
}

export default CreatePostModal
