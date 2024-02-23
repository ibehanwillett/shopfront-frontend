import react from 'react'


const HandleFormSubmit = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        AddItem({})
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit} >

            </form>
        </>
    )
}