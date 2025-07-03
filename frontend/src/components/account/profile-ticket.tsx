import React from "react";

export default function ProfileTicket() {
  return (
    <div className="profile__ticket table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Order Id</th>
            <th scope="col">Product Title</th>
            <th scope="col">Status</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"> #2245</th>
            <td data-info="title">How can i share ?</td>
            <td data-info="status pending">Pending </td>
            <td>
              <a href="#" className="tp-logout-btn">
                Invoice
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row"> #2220</th>
            <td data-info="title">Send money, but not working</td>
            <td data-info="status reply">Need your replay</td>
            <td>
              <a href="#" className="tp-logout-btn">
                Reply
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row"> #2125</th>
            <td data-info="title">Balance error</td>
            <td data-info="status done">Resolved</td>
            <td>
              <a href="#" className="tp-logout-btn">
                Invoice
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row"> #2124</th>
            <td data-info="title">How to decline bid</td>
            <td data-info="status hold">On Hold</td>
            <td>
              <a href="#" className="tp-logout-btn">
                Status
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row"> #2121</th>
            <td data-info="title">How to contact</td>
            <td data-info="status done">Resolved</td>
            <td>
              <a href="#" className="tp-logout-btn">
                Invoice
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
