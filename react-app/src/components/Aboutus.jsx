/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";

function Aboutus() {
  return (
    <div>
      <Header />
      <div className="bg-gray-100">
        <div className="container mx-auto py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
              About Us
              <p>Devloped by</p>
           
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Raval Ankesh</th>
                    <th className="px-4 py-2">&</th>
                    <th className="px-4 py-2">Gauswami Shivampari</th>
                  </tr>
                </thead>
                
              </table>
              
            </div>
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aboutus;
