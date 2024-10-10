import React from "react";
import { Link } from "react-router-dom";

const TermsCondition = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 my-16">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-6">
          Terms and Conditions
        </h1>
        <p className="text-gray-700 mb-4">
          Welcome to [Your Chinese Restaurant Name]! These terms and conditions outline the rules and regulations for the use of our services and website.
        </p>
        <p className="text-gray-700 mb-4">
          By accessing or using our website, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of them, you must not use our website or services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. License to Use</h2>
        <p className="text-gray-700 mb-4">
          Unless otherwise stated, [Your Chinese Restaurant Name] and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and/or print pages for your personal use subject to restrictions set in these terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. User Conduct</h2>
        <p className="text-gray-700 mb-4">
          You must not:
        </p>
        <ul className="list-disc ml-5 text-gray-700 mb-4">
          <li>Republish material from this website without prior consent.</li>
          <li>Sell, rent, or sub-license material from the website.</li>
          <li>Reproduce, duplicate, or copy material from the website.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Reservations and Orders</h2>
        <p className="text-gray-700 mb-4">
          Any reservations or orders placed through our website are subject to availability. We reserve the right to cancel or modify orders at our discretion.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          [Your Chinese Restaurant Name] will not be liable for any direct, indirect, or consequential loss or damage arising under these terms and conditions or in connection with our website, whether arising in tort, contract, or otherwise.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Changes to Terms</h2>
        <p className="text-gray-700 mb-4">
          We may revise these terms and conditions from time to time. By using this website, you agree to be bound by the current version of these terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Governing Law</h2>
        <p className="text-gray-700 mb-4">
          These terms and conditions are governed by and construed in accordance with the laws of [Your Country], and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>

        <p className="text-gray-700 mb-4">
          If you have any questions or concerns about these terms, please contact us at [Your Contact Information].
        </p>

        <div className="text-center mt-6">
          <Link to={'/'} className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;
