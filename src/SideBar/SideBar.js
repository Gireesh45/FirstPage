import './SideBar.css'
import { FiPrinter } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
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
                        <div>
                        <p className='create'>Templates</p>
                        <hr className='create-line-1' />
                        </div>
                        <div>
                            <p className='create'>Create Invoice</p>
                           
                        </div>
                    </div>
                    <hr className='create-line' />
                    <div className='templates-container'>
                     <div className='invoice-card-2'>
                            <div className='names-container-templates'>
                                <p className="card-title-2">S K I N C L U B</p>
                                <p className="card-sub-title-2">COSMOTIC DOCTORS</p>
                            </div>
                            <div className='summery-container'>
                                <p className='summery-text-2'>SUMMERY</p>
                                <hr className='summery-hr-line' />
                            </div>
                            <div className='card-names-container-2'>
                                <p className='names-2'>Dr Vihang</p>
                                <p className='names-2'>Jane Doe</p>
                            </div>
                            <div className='table-container-2'>
                                <table>
                                    <tr>
                                        <th className='th-element-template th-2'>Item</th>
                                        <th className='th-2'>Rate</th>
                                        <th className='th-2'>Qut</th>
                                        <th className='th-element-2-template th-2'>Amount</th>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>

                                </table>

                            </div>
                            <div className='sub-template-parent'>
                            <div className='sub-template'>
                                <p className='sub-total-2'>Subtotal</p>
                                <p className='sub-total-2'>$540.00</p>
                            </div>
                            <div className='sub-template'>
                                <p className='tax-text-2'>tax 5%</p>
                                <p className='tax-text-2'>$00.00</p>
                            </div>
                            <div className='sub-template'>
                                <p className='tax-text-2'>Discount 10%</p>
                                <p className='tax-text-2'>$00.00</p>
                            </div>
                            </div>
                            <hr />
                            <div className='sub-template-parent'>
                            <div className='sub-template'>
                                <p className='sub-total-2'>total</p>
                                <p className='sub-total-2'>$540.00</p>
                            </div>
                            </div>
                            <div className='notes-2'>
                                <p className='notes-text-2 notes-heading'>Notes/Terms</p>
                                <p className='notes-text-2'>Lorem ipsum dolor sit amet.Sit ecue asssumenda qui</p>
                            </div>
                        </div>
                        <div className='invoice-card-2'>
                            <div className='names-container-templates'>
                                <p className="card-title card-title-2">S K I N C L U B</p>
                                <p className="card-sub-title-2">COSMOTIC DOCTORS</p>
                            </div>
                            <div className='summery-container'>
                                <p className='summery-text-2'>SUMMERY</p>
                                <hr className='summery-hr-line' />
                            </div>
                            <div className='card-names-container-2'>
                                <p className='names-2'>Dr Vihang</p>
                                <p className='names-2'>Jane Doe</p>
                            </div>
                            <div className='table-container-2'>
                                <table>
                                    <tr>
                                        <th className='th-element-template th-2'>Item</th>
                                        <th className='th-2'>Rate</th>
                                        <th className='th-2'>Qut</th>
                                        <th className='th-element-2-template th-2'>Amount</th>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>

                                </table>

                            </div>
                            <div className='sub-template-parent'>
                            <div className='sub-template'>
                                <p className='sub-total-2'>Subtotal</p>
                                <p className='sub-total-2'>$540.00</p>
                            </div>
                            <div className='sub-template'>
                                <p className='tax-text-2'>tax 5%</p>
                                <p className='tax-text-2'>$00.00</p>
                            </div>
                            <div className='sub-template'>
                                <p className='tax-text-2'>Discount 10%</p>
                                <p className='tax-text-2'>$00.00</p>
                            </div>
                            </div>
                            <hr />
                            <div className='sub-template-parent'>
                            <div className='sub-template'>
                                <p className='sub-total-2'>total</p>
                                <p className='sub-total-2'>$540.00</p>
                            </div>
                            </div>
                            <div className='notes-2'>
                                <p className='notes-text-2 notes-heading'>Notes/Terms</p>
                                <p className='notes-text-2'>Lorem ipsum dolor sit amet.Sit ecue asssumenda qui</p>
                            </div>
                        </div>
                        <div className='invoice-card-2-md'>
                            <div className='names-container-templates'>
                                <p className="card-title card-title-2">S K I N C L U B</p>
                                <p className="card-sub-title-2">COSMOTIC DOCTORS</p>
                            </div>
                            <div className='summery-container'>
                                <p className='summery-text-2'>SUMMERY</p>
                                <hr className='summery-hr-line' />
                            </div>
                            <div className='card-names-container-2'>
                                <p className='names-2'>Dr Vihang</p>
                                <p className='names-2'>Jane Doe</p>
                            </div>
                            <div className='table-container-2'>
                                <table>
                                    <tr>
                                        <th className='th-element-template th-2'>Item</th>
                                        <th className='th-2'>Rate</th>
                                        <th className='th-2'>Qut</th>
                                        <th className='th-element-2-template th-2'>Amount</th>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>

                                </table>

                            </div>
                            <div className='sub-template-parent'>
                            <div className='sub-template'>
                                <p className='sub-total-2'>Subtotal</p>
                                <p className='sub-total-2'>$540.00</p>
                            </div>
                            <div className='sub-template'>
                                <p className='tax-text-2'>tax 5%</p>
                                <p className='tax-text-2'>$00.00</p>
                            </div>
                            <div className='sub-template'>
                                <p className='tax-text-2'>Discount 10%</p>
                                <p className='tax-text-2'>$00.00</p>
                            </div>
                            </div>
                            <hr />
                            <div className='sub-template-parent'>
                            <div className='sub-template'>
                                <p className='sub-total-2'>total</p>
                                <p className='sub-total-2'>$540.00</p>
                            </div>
                            </div>
                            <div className='notes-2'>
                                <p className='notes-text-2 notes-heading'>Notes/Terms</p>
                                <p className='notes-text-2'>Lorem ipsum dolor sit amet.Sit ecue asssumenda qui</p>
                            </div>
                        </div>
                        <div className='invoice-card-2'>
                            <div className='names-container-templates'>
                                <p className="card-title card-title-2">S K I N C L U B</p>
                                <p className="card-sub-title-2">COSMOTIC DOCTORS</p>
                            </div>
                            <div className='summery-container'>
                                <p className='summery-text-2'>SUMMERY</p>
                                <hr className='summery-hr-line' />
                            </div>
                            <div className='card-names-container-2'>
                                <p className='names-2'>Dr Vihang</p>
                                <p className='names-2'>Jane Doe</p>
                            </div>
                            <div className='table-container-2'>
                                <table>
                                    <tr>
                                        <th className='th-element-template th-2'>Item</th>
                                        <th className='th-2'>Rate</th>
                                        <th className='th-2'>Qut</th>
                                        <th className='th-element-2-template th-2'>Amount</th>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>

                                </table>

                            </div>
                            <div className='sub-template-parent'>
                            <div className='sub-template'>
                                <p className='sub-total-2'>Subtotal</p>
                                <p className='sub-total-2'>$540.00</p>
                            </div>
                            <div className='sub-template'>
                                <p className='tax-text-2'>tax 5%</p>
                                <p className='tax-text-2'>$00.00</p>
                            </div>
                            <div className='sub-template'>
                                <p className='tax-text-2'>Discount 10%</p>
                                <p className='tax-text-2'>$00.00</p>
                            </div>
                            </div>
                            <hr />
                            <div className='sub-template-parent'>
                            <div className='sub-template'>
                                <p className='sub-total-2'>total</p>
                                <p className='sub-total-2'>$540.00</p>
                            </div>
                            </div>
                            <div className='notes-2'>
                                <p className='notes-text-2 notes-heading'>Notes/Terms</p>
                                <p className='notes-text-2'>Lorem ipsum dolor sit amet.Sit ecue asssumenda qui</p>
                            </div>
                        </div>
                        </div>
                        <div className='templates-container'>
                     <div className='invoice-card-2'>
                            <div className='names-container-templates'>
                                <p className="card-title card-title-2">S K I N C L U B</p>
                                <p className="card-sub-title-2">COSMOTIC DOCTORS</p>
                            </div>
                            <div className='summery-container'>
                                <p className='summery-text-2'>SUMMERY</p>
                                <hr className='summery-hr-line' />
                            </div>
                            <div className='card-names-container-2'>
                                <p className='names-2'>Dr Vihang</p>
                                <p className='names-2'>Jane Doe</p>
                            </div>
                            <div className='table-container-2'>
                                <table>
                                    <tr>
                                        <th className='th-element-template th-2'>Item</th>
                                        <th className='th-2'>Rate</th>
                                        <th className='th-2'>Qut</th>
                                        <th className='th-element-2-template th-2'>Amount</th>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>

                                </table>

                            </div>
                            <div className='sub-template-parent'>
                            <div className='sub-template'>
                                <p className='sub-total-2'>Subtotal</p>
                                <p className='sub-total-2'>$540.00</p>
                            </div>
                            <div className='sub-template'>
                                <p className='tax-text-2'>tax 5%</p>
                                <p className='tax-text-2'>$00.00</p>
                            </div>
                            <div className='sub-template'>
                                <p className='tax-text-2'>Discount 10%</p>
                                <p className='tax-text-2'>$00.00</p>
                            </div>
                            </div>
                            <hr />
                            <div className='sub-template-parent'>
                            <div className='sub-template'>
                                <p className='sub-total-2'>total</p>
                                <p className='sub-total-2'>$540.00</p>
                            </div>
                            </div>
                            <div className='notes-2'>
                                <p className='notes-text-2 notes-heading'>Notes/Terms</p>
                                <p className='notes-text-2'>Lorem ipsum dolor sit amet.Sit ecue asssumenda qui</p>
                            </div>
                        </div>
                        <div className='invoice-card-2-md'>
                            <div className='names-container-templates'>
                                <p className="card-title card-title-2">S K I N C L U B</p>
                                <p className="card-sub-title-2">COSMOTIC DOCTORS</p>
                            </div>
                            <div className='summery-container'>
                                <p className='summery-text-2'>SUMMERY</p>
                                <hr className='summery-hr-line' />
                            </div>
                            <div className='card-names-container-2'>
                                <p className='names-2'>Dr Vihang</p>
                                <p className='names-2'>Jane Doe</p>
                            </div>
                            <div className='table-container-2'>
                                <table>
                                    <tr>
                                        <th className='th-element-template th-2'>Item</th>
                                        <th className='th-2'>Rate</th>
                                        <th className='th-2'>Qut</th>
                                        <th className='th-element-2-template th-2'>Amount</th>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>

                                </table>

                            </div>
                            <div className='sub-template-parent'>
                            <div className='sub-template'>
                                <p className='sub-total-2'>Subtotal</p>
                                <p className='sub-total-2'>$540.00</p>
                            </div>
                            <div className='sub-template'>
                                <p className='tax-text-2'>tax 5%</p>
                                <p className='tax-text-2'>$00.00</p>
                            </div>
                            <div className='sub-template'>
                                <p className='tax-text-2'>Discount 10%</p>
                                <p className='tax-text-2'>$00.00</p>
                            </div>
                            </div>
                            <hr />
                            <div className='sub-template-parent'>
                            <div className='sub-template'>
                                <p className='sub-total-2'>total</p>
                                <p className='sub-total-2'>$540.00</p>
                            </div>
                            </div>
                            <div className='notes-2'>
                                <p className='notes-text-2 notes-heading'>Notes/Terms</p>
                                <p className='notes-text-2'>Lorem ipsum dolor sit amet.Sit ecue asssumenda qui</p>
                            </div>
                        </div>
                        <div className='invoice-card-2'>
                            <div className='names-container-templates'>
                                <p className="card-title card-title-2">S K I N C L U B</p>
                                <p className="card-sub-title-2">COSMOTIC DOCTORS</p>
                            </div>
                            <div className='summery-container'>
                                <p className='summery-text-2'>SUMMERY</p>
                                <hr className='summery-hr-line' />
                            </div>
                            <div className='card-names-container-2'>
                                <p className='names-2'>Dr Vihang</p>
                                <p className='names-2'>Jane Doe</p>
                            </div>
                            <div className='table-container-2'>
                                <table>
                                    <tr>
                                        <th className='th-element-template th-2'>Item</th>
                                        <th className='th-2'>Rate</th>
                                        <th className='th-2'>Qut</th>
                                        <th className='th-element-2-template th-2'>Amount</th>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>

                                </table>

                            </div>
                            <div className='sub-template-parent'>
                            <div className='sub-template'>
                                <p className='sub-total-2'>Subtotal</p>
                                <p className='sub-total-2'>$540.00</p>
                            </div>
                            <div className='sub-template'>
                                <p className='tax-text-2'>tax 5%</p>
                                <p className='tax-text-2'>$00.00</p>
                            </div>
                            <div className='sub-template'>
                                <p className='tax-text-2'>Discount 10%</p>
                                <p className='tax-text-2'>$00.00</p>
                            </div>
                            </div>
                            <hr />
                            <div className='sub-template-parent'>
                            <div className='sub-template'>
                                <p className='sub-total-2'>total</p>
                                <p className='sub-total-2'>$540.00</p>
                            </div>
                            </div>
                            <div className='notes-2'>
                                <p className='notes-text-2 notes-heading'>Notes/Terms</p>
                                <p className='notes-text-2'>Lorem ipsum dolor sit amet.Sit ecue asssumenda qui</p>
                            </div>
                        </div>
                        <div className='invoice-card-2'>
                            <div className='names-container-templates'>
                                <p className="card-title card-title-2">S K I N C L U B</p>
                                <p className="card-sub-title-2">COSMOTIC DOCTORS</p>
                            </div>
                            <div className='summery-container'>
                                <p className='summery-text-2'>SUMMERY</p>
                                <hr className='summery-hr-line' />
                            </div>
                            <div className='card-names-container-2'>
                                <p className='names-2'>Dr Vihang</p>
                                <p className='names-2'>Jane Doe</p>
                            </div>
                            <div className='table-container-2'>
                                <table>
                                    <tr>
                                        <th className='th-element-template th-2'>Item</th>
                                        <th className='th-2'>Rate</th>
                                        <th className='th-2'>Qut</th>
                                        <th className='th-element-2-template th-2'>Amount</th>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>
                                    <tr>
                                        <td className='template-td'>Vitamin A Night Seerum</td>
                                        <td className='template-td'>$9C</td>
                                        <td className='template-td'>2</td>
                                        <td className='template-td'>$180</td>
                                    </tr>

                                </table>

                            </div>
                            <div className='sub-template-parent'>
                            <div className='sub-template'>
                                <p className='sub-total-2'>Subtotal</p>
                                <p className='sub-total-2'>$540.00</p>
                            </div>
                            <div className='sub-template'>
                                <p className='tax-text-2'>tax 5%</p>
                                <p className='tax-text-2'>$00.00</p>
                            </div>
                            <div className='sub-template'>
                                <p className='tax-text-2'>Discount 10%</p>
                                <p className='tax-text-2'>$00.00</p>
                            </div>
                            </div>
                            <hr />
                            <div className='sub-template-parent'>
                            <div className='sub-template'>
                                <p className='sub-total-2'>total</p>
                                <p className='sub-total-2'>$540.00</p>
                            </div>
                            </div>
                            <div className='notes-2'>
                                <p className='notes-text-2 notes-heading'>Notes/Terms</p>
                                <p className='notes-text-2'>Lorem ipsum dolor sit amet.Sit ecue asssumenda qui</p>
                            </div>
                        </div>
                        </div>
                </div>
                <div className="invoice-card-container-2">
                    <div className='preview-container'>
                        <p className='preview-text'>Preview Invoice</p>
                        <div className='bell-container'>
                        <CiEdit />
                        </div>
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