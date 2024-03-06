import './SideBar.css'
import { FiPrinter } from "react-icons/fi";
import { FaMicroscope } from "react-icons/fa";
import { IoMic } from "react-icons/io5";
import { TbNotes } from "react-icons/tb";
export const SideBar = () => (
    <div className="side-invoice-container">
        <div className="bg-container">
            <p>OverView</p>
            <p>Profile</p>
            <p>Appointments</p>

            <p>History</p>
            <div className="sub-options">
                <p>Videos</p>
                <p>Videos Library</p>
            </div>
            <p>Messages</p>
            <p>Support</p>
            <div className="sub-options">
                <p>FAQ's</p>
                <p>Procedure Information</p>
            </div>
            <p>Aftercare</p>
            <div className="sub-options">
                <p>Quizes</p>
                <p>Health & skincare</p>
            </div>
            <p>Finances</p>
            <p className='virtual'>Virtual Consultation</p>
        </div>
        <div className="invoice-bg-container">
            <div className='title-invoice-container'>
                <h3 className='invoice-heading'>Invoice</h3>
                <p>Create a invoice for your patients</p>
            </div>
            <div className='cards-container'>
                <div className="invoice-card-container">
                    <div className='top-section'>

                        <p className='create'>Templates</p>
                        <div>
                            <p className='create'>Create Invoice</p>
                            <hr className='create-line-1' />
                        </div>
                    </div>
                    <hr className='create-line' />
                    <div>
                        <div className='first-container-input'>
                            <div>
                                <label for="cars" className='label'>Select a person:</label><br />

                                <select name="cars" id="cars" className='persons-list'>
                                    <option value="volvo">Select the person whom you will send this</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div>
                                <label className='label'>Invoice</label>
                                <br />
                                <input className='number' />
                            </div><br />
                        </div>
                        <div className='first-container-input'>
                            <div>
                                <label for="cars" className='label'>Add a treatment:</label><br />

                                <select name="cars" id="cars" className='persons-list'>
                                    <option value="volvo">Select a treatment</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>



                            <div>
                                <label className='label'>Select Date</label>
                                <br />
                                <input className='number' placeholder='mm/dd/yyyy' />
                            </div>
                        </div>
                    </div>
                    <div className='first-treatment-card'>
                        <div className='card-1-inner'>
                            <p className='treatment'>Treatments</p>
                            <p className='treatment'>Amount</p>
                        </div>
                        <hr className='first-hr' />
                        <div className='card-1-inner-2'>
                            <p className='anti-wrinkle'>Anti Wrinkle treatment</p>
                            <p className='anti-wrinkle'>$1480</p>
                            <div className='buts-con'>
                                <button className='add-but'>Add</button>
                                <button className='remove-but'>Remove</button>
                            </div>
                        </div>

                    </div>
                    <div className='first-treatment-card'>
                        <div className='card-1-inner-2'>
                            <p className='treatment'>Treatments</p>
                            <p className='treatment'>Rate/per section</p>
                            <p className='treatment'>no of section</p>
                            <p className='treatment'>Total</p>
                        </div>
                        <hr className='first-hr' />
                        <div className='card-1-inner-2'>
                            <button className='second-card-buts'>Hair Care Session</button>
                            <button className='second-card-buts'>$145</button>
                            <button className='second-card-buts'>$8</button>
                            <button className='second-card-buts'>$1160</button>
                        </div>
                        <div className='buts-con'>
                            <button className='add-but'>Add</button>
                            <button className='remove-but'>Remove</button>
                        </div>
                    </div>
                    {/* <div className='first-treatment-card'>
            <div className='card-1-inner'>
            <p>Treatments</p>
            <p>Amount</p>
            </div>
            <hr/>
          </div> */}
                    <div className='first-treatment-card'>
                        <div className='card-1-inner-2'>
                            <p className='treatment'>Treatments</p>
                            <p className='treatment'>Rate</p>
                            <p className='treatment'>Qty</p>
                            <p className='treatment'>Amount</p>
                        </div>
                        <hr className='first-hr' />
                        <div className='card-1-inner-2'>
                            <button className='second-card-buts'>Vitamin A Night Serum</button>
                            <button className='second-card-buts'>$90</button>
                            <button className='second-card-buts'>$2</button>
                            <button className='second-card-buts'>$180</button>
                        </div>
                        <div className='card-1-inner-2'>
                            <button className='second-card-buts'>Vitamin A Night Serum</button>
                            <button className='second-card-buts'>$90</button>
                            <button className='second-card-buts'>$2</button>
                            <button className='second-card-buts'>$180</button>
                        </div>
                        <div className='buts-con'>
                            <button className='add-but'>Add</button>
                            <button className='remove-but'>Remove</button>
                        </div>
                    </div>
                        
                    <div>
                        <label className='label'>Add Notes/Terms</label><br />
                        <div className='input-notes'>
                        <FaMicroscope />
                        </div>
                    </div>
                    <div className='sub-container'>
                    <div>
                        <label className='label'>Signature</label><br />
                        <div className='input-notes'>
                       <hr/>
                        </div>
                    </div>
                    <div className='sub'>
                        <p>Subtotal</p>
                        <p>$540.00</p>
                    </div>
                    </div>
                    <div className='sub-2'>
                        <p className='sub-label'>Transaction fee</p>
                        <div className='fee'>$00.00</div>
                    </div>
                    <div className='sub-2'>
                        <p className='sub-label'>Discount 10%</p>
                        <div className='fee'>$00.00</div>
                    </div>
                    <div className='total-sub-parent'>
                    <div className='total-sub'>
                       <p>Total</p>
                       <p>$540.00</p>
                    </div>
                    </div>
                </div>
                <div className="invoice-card-container-2">
                    <div className='preview-container'>
                        <p className='preview-text'>Preview Invoice</p>
                        <div className='bell-container'>
                            <FiPrinter />
                        </div>
                    </div>
                    <div>
                        <div className='invoice-card'>
                            <div className='names-container'>
                                <p className="card-title">S K I N C L U B</p>
                                <p className="card-sub-title">COSMOTIC DOCTORS</p>
                            </div>
                            <div className='summery-container'>
                                <p className='summery-text'>SUMMERY</p>
                                <hr className='summery-hr-line' />
                            </div>
                            <div className='card-names-container'>
                                <p className='names'>Dr Vihang</p>
                                <p className='names'>Jane Doe</p>
                            </div>
                            <div className='table-container'>
                                <table>
                                    <tr>
                                        <th className='th-element'>Item</th>
                                        <th>Rate</th>
                                        <th>Qut</th>
                                        <th className='th-element-2'>Amount</th>
                                    </tr>
                                    <tr>
                                        <td>Vitamin A Night Seerum</td>
                                        <td>$9C</td>
                                        <td>2</td>
                                        <td>$180</td>
                                    </tr>
                                    <tr>
                                        <td>Vitamin A Night Seerum</td>
                                        <td>$9C</td>
                                        <td>2</td>
                                        <td>$180</td>
                                    </tr>
                                    <tr>
                                        <td>Vitamin A Night Seerum</td>
                                        <td>$9C</td>
                                        <td>2</td>
                                        <td>$180</td>
                                    </tr>

                                </table>

                            </div>

                            <table>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className='sub-total'>Subtotal</td>
                                    <td className='sub-total'>$540.00</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className='tax-text'>tax 5%</td>
                                    <td className='tax-text'>$00.00</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className='tax-text'>Discount 10%</td>
                                    <td className='tax-text'>$00.00</td>
                                </tr>

                            </table>
                            <hr />
                            <table>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                    <td className='sub-total'>total</td>
                                    <td className='sub-total'>$540.00</td>
                                </tr>
                            </table>
                            <div className='notes'>
                                <p className='notes-text notes-heading'>Notes/Terms</p>
                                <p className='notes-text'>Lorem ipsum dolor sit amet.Sit ecue asssumenda qui</p>
                            </div>
                        </div>
                        <div className='save-buts-con'>
                            <div className='button-container'>
                                <button className='create-button save'>Save</button>
                            </div>
                            <div className='button-container'>
                                <button className='create-button'>Save&Send</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
)