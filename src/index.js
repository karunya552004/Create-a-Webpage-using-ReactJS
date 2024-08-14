import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './component/header';
import Footer from './component/footer';

function Myapp(){
    return(
        <div class="content">
            <div class="tbl">
            <table >
                <tr>
                    <th>S.NO</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>College Name</th>
                    <th>Year of Passed out</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Karunya</td>
                    <td>CSE</td>
                    <td>HICET</td>
                    <td>2025</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Narmatha</td>
                    <td>ECE</td>
                    <td>SRCET</td>
                    <td>2025</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Siva Priya</td>
                    <td>ECE</td>
                    <td>KCET</td>
                    <td>2025</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Gowtham</td>
                    <td>Mechanical</td>
                    <td>HIT</td>
                    <td>2026</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Suganya</td>
                    <td>ECE</td>
                    <td>KCET</td>
                    <td>2024</td>
                </tr>
            </table>
            </div>
            <div class="form">
                <h2 >Contact Us</h2>
                <div class="form1">
                <label>Email : </label>
                <input placeholder="Enter your Email"></input>
                </div>
                <div class="form1">
                <label>Password : </label>
                <input placeholder="Enter your Password"></input>
                </div>
            </div>
        </div>
    )

}

function Msg(){
    return(
        <div>
        <Header/>
        <Myapp/>
        <Footer/>
        </div>
    );
}
ReactDOM.render(<Msg/>,document.getElementById("root"));

