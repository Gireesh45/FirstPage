import './SideBar.css'
import { IoSearch } from "react-icons/io5";
import { FiPrinter } from "react-icons/fi";
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
        <h1>Invoice</h1>
        <p>Invoicelist</p>
        </div>
        <div className='cards-container'>
        <div className="invoice-card-container">
            <div className='top-section'>
            <div className="input-container">
            
            <input placeholder='Search by patient name' className="input-text"/>
            <div className="icon-container">
            <p>|</p>
            <div className='icon'>
            <IoSearch/>
            </div>
            
            </div>
        
            </div>
            <div className='date-container'>
                <p className='date-text'><span className='select-text'>Select Date:</span> | 20 Aug <span className='icon-v'>v</span></p>
           </div>
           </div>
           <hr/>
           <div className='first-table-container'>
           <table>
  <tr >
    <th className='first-table-header first'>Patient</th>
    <th className='first-table-header'>Time</th>
    <th className='first-table-header'>Date</th>
    <th className='first-table-header'>Total</th>
    <th className='first-table-header last'>Status</th>
  </tr>
  <tr className='first-table-row'>
    <td className='first-table-data'>John Doe</td>
    <td className='first-table-data'>9.00-10.30</td>
    <td className='first-table-data'>22-08-2023</td>
    <td className='first-table-data'>$180</td>
    <td className='first-table-data'><button className='inprogress'>Inprogress</button></td>
  </tr>
  <tr className='first-table-row'>
    <td className='first-table-data'>John Doe</td>
    <td className='first-table-data'>9.00-10.30</td>
    <td className='first-table-data'>22-08-2023</td>
    <td className='first-table-data'>$180</td>
    <td className='first-table-data'><button className='complete'>Complete</button></td>
  </tr>
  <tr className='first-table-row'>
    <td className='first-table-data'>John Doe</td>
    <td className='first-table-data'>9.00-10.30</td>
    <td className='first-table-data'>22-08-2023</td>
    <td className='first-table-data'>$180</td>
    <td className='first-table-data'><button className='cancle'>Canceled</button></td>
  </tr>
  <tr className='first-table-row'>
    <td className='first-table-data'>John Doe</td>
    <td className='first-table-data'>9.00-10.30</td>
    <td className='first-table-data'>22-08-2023</td>
    <td className='first-table-data'>$180</td>
    <td className='first-table-data'><button className='complete'>Complete</button></td>
  </tr>
  <tr className='first-table-row'>
    <td className='first-table-data'>John Doe</td>
    <td className='first-table-data'>9.00-10.30</td>
    <td className='first-table-data'>22-08-2023</td>
    <td className='first-table-data'>$180</td>
    <td className='first-table-data'><button className='complete'>Complete</button></td>
  </tr>
  <tr className='first-table-row'>
    <td className='first-table-data'>John Doe</td>
    <td className='first-table-data'>9.00-10.30</td>
    <td className='first-table-data'>22-08-2023</td>
    <td className='first-table-data'>$180</td>
    <td className='first-table-data'><button className='complete'>Complete</button></td>
  </tr>
  <tr>
    <td className='first-table-data'>John Doe</td>
    <td className='first-table-data'>9.00-10.30</td>
    <td className='first-table-data'>22-08-2023</td>
    <td className='first-table-data'>$180</td>
    <td className='first-table-data'><button className='complete'>Complete</button></td>
  </tr>
  <tr className='first-table-row'>
    <td className='first-table-data'>John Doe</td>
    <td className='first-table-data'>9.00-10.30</td>
    <td className='first-table-data'>22-08-2023</td>
    <td className='first-table-data'>$180</td>
    <td className='first-table-data'><button className='complete'>Complete</button></td>
  </tr>
  <tr className='first-table-row'>
    <td className='first-table-data'>John Doe</td>
    <td className='first-table-data'>9.00-10.30</td>
    <td className='first-table-data'>22-08-2023</td>
    <td className='first-table-data'>$180</td>
    <td className='first-table-data'><button className='complete'>Complete</button></td>
  </tr>
  <tr className='first-table-row'>
    <td className='first-table-data'>John Doe</td>
    <td className='first-table-data'>9.00-10.30</td>
    <td className='first-table-data'>22-08-2023</td>
    <td className='first-table-data'>$180</td>
    <td className='first-table-data'><button className='complete'>Complete</button></td>
  </tr>
  <tr>
    <td className='last-data first-table-data'></td>
    <td className='first-table-data'></td>
    <td className='first-table-data'><a href='#'>Viewmore</a></td>
    <td className='first-table-data'></td>
    <td className='last-data-2 first-table-data'></td>
  </tr>
  
</table>
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
        <hr className='summery-hr-line'/>
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
<hr/>
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
       
       
        <div className='button-container'>
        <button className='create-button'>Create New Invoice</button>
        </div>
        
          </div>
        </div>
       
    </div>
    </div>
    </div>
)