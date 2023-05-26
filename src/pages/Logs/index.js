import './style.css'
import Card from '../../components/card'
import DeleteDelLog from '../../components/deleteDelLog'

function LogsPage() {
    
    return (
        <>
            <main>
                <Card>
                    <div className='deliveryLogs'>

                        <div className='header'>

                            <h1>Delivery Logs</h1>
                            <form>
                                <div className='inputwrapper'>
                                    <input placeholder='Search logs' type='text' name='search' className='input-has-icon'/>
                                    <span className='input-icon'>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.8 30L20.7 22.8C19.7 23.7 18.5 24.3 17.2 24.8C15.9 25.3 14.4 25.5 13 25.5C9.4 25.5 6.4 24.3 3.9 21.7C1.4 19.1 0 16.3 0 12.8C0 9.3 1.2 6.3 3.8 3.8C6.4 1.3 9.3 0 12.9 0C16.4 0 19.4 1.2 21.9 3.8C24.4 6.4 25.6 9.3 25.6 12.8C25.6 14.2 25.4 15.6 24.9 17C24.4 18.3 23.7 19.6 22.8 20.8L30 27.9L27.8 30ZM12.8 22.6C15.5 22.6 17.8 21.6 19.7 19.7C21.6 17.8 22.6 15.5 22.6 12.8C22.6 10.1 21.6 7.8 19.7 5.9C17.8 4 15.6 3 12.9 3C10.2 3 7.8 4 5.9 5.9C4 7.8 3 10.1 3 12.8C3 15.5 4 17.8 5.9 19.7C7.8 21.6 10.1 22.6 12.8 22.6Z" fill="#000046"></path></svg>
                                    </span>
                                </div>

                            </form>

                            <hr className='hr-line' />
                            <hr className='hr-line' />

                            <h2>Cohorts</h2>

                        </div>

                        <div className = 'cohorts'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>
                        <div>
                            <DeleteDelLog />
                        </div>



                    </div>

                    



                </Card>

            </main>
        
            {/* <aside>
                <div className='card false'>

                    <form>
                        <div className='inputwrapper'>
                            <input placeholder='Search logs' type='text' name='search' className='input-has-icon'/>
                            <span className='input-icon'>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.8 30L20.7 22.8C19.7 23.7 18.5 24.3 17.2 24.8C15.9 25.3 14.4 25.5 13 25.5C9.4 25.5 6.4 24.3 3.9 21.7C1.4 19.1 0 16.3 0 12.8C0 9.3 1.2 6.3 3.8 3.8C6.4 1.3 9.3 0 12.9 0C16.4 0 19.4 1.2 21.9 3.8C24.4 6.4 25.6 9.3 25.6 12.8C25.6 14.2 25.4 15.6 24.9 17C24.4 18.3 23.7 19.6 22.8 20.8L30 27.9L27.8 30ZM12.8 22.6C15.5 22.6 17.8 21.6 19.7 19.7C21.6 17.8 22.6 15.5 22.6 12.8C22.6 10.1 21.6 7.8 19.7 5.9C17.8 4 15.6 3 12.9 3C10.2 3 7.8 4 5.9 5.9C4 7.8 3 10.1 3 12.8C3 15.5 4 17.8 5.9 19.7C7.8 21.6 10.1 22.6 12.8 22.6Z" fill="#000046"></path></svg>
                            </span>
                        </div>

                    </form>
                </div>
            </aside> */}
        </>



    )
}

export default LogsPage