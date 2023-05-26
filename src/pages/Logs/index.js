import './style.css'
import Card from '../../components/card'
import SearchIcon from '../../assets/icons/searchIcon'
import Form from '../../components/form'
import DeliveryLogs from '../../components/deliveryLogs'

function LogsPage() {
    
    return (
        <>
            <main>
                <Card>
                    <DeliveryLogs className = 'deliveryLogs'>

                        <div className='header'>

                            <h1>Delivery Logs</h1>
                            <Form>
                                <div className='inputwrapper'>
                                    <input placeholder='Search logs' type='text' name='search' className='input-has-icon'/>
                                    <span className='input-icon'>
                                        <SearchIcon/>
                                    </span>
                                </div>
                            </Form>

                            

                            <hr className='hr-line' />
                            <hr className='hr-line' />

                            <h2>Cohorts</h2>

                        </div>

                        <div className = 'cohorts'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>

                    </DeliveryLogs>


                </Card>

            </main>

        </>



    )
}

export default LogsPage