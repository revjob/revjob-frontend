// Importing the Button component from the custom path "@/components/ui/button"
import { Button } from "@/components/ui/button"
// Importing an icon component from the 'react-icons/fa' library
import { FaBeer } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

// Defining the Home component responsible for rendering the home page content
export default function Home() {

    const navigate = useNavigate();

    return (
        // Container div for the entire home page content
        <div className="flex flex-col w-full items-center justify-center bg-sky-50">
            {/* Main Text Content */}
            <section className="text-center my-8">
                {/* Heading for the main text content */}
                <h1 className="text-4xl font-bold mb-4">MACACO SUGOU to Our Website</h1>
                {/* Paragraph for the main text content */}
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies magna in magna varius, ac posuere est volutpat.</p>
            </section>

            {/* Features Section */}
            <section className="bg-white py-12 px-6 my-8">
                {/* Heading for the features section */}
                <h2 className="text-2xl font-bold mb-4">Our Features</h2>
                {/* Grid layout for features */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Individual feature cards */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">MACACO 1</h3>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel semper est.</p>
                    </div>
                    {/* Feature 2 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Feature 2</h3>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel semper est.</p>
                    </div>
                    {/* Feature 3 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Feature 3</h3>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel semper est.</p>
                    </div>
                </div>
            </section>

            {/* Pricing Plans */}
            <section className="bg-white py-12 px-6 my-8">
                {/* Heading for the pricing plans section */}
                <h2 className="text-2xl font-bold mb-4">Pricing Plans</h2>
                {/* Grid layout for pricing plans */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Pricing Plan Cards */}
                    <div className="bg-sky-100 rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold mb-2">PLANO DO PAI DE BIXO</h3>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        {/* Button for signing up */}
                        <button 
                            onClick={() => navigate('/pdb')}
                            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Sign Up</button>
                    </div>
                    {/* Pro Plan */}
                    <div className="bg-sky-100 rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold mb-2">Pro Plan</h3>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        {/* Custom Button component */}
                        <Button variant="outline">Button</Button>
                    </div>
                    {/* Enterprise Plan */}
                    <div className="bg-sky-100 rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold mb-2">Enterprise Plan</h3>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        {/* Custom Button component with icon */}
                        <Button>
                            <FaBeer className="mr-2 h-4 w-4" /> Another Button
                        </Button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-white py-12 px-6 my-8">
                {/* Heading for the contact section */}
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                {/* Form for contacting */}
                <form className="flex flex-col space-y-4">
                    {/* Input field for name */}
                    <input type="text" placeholder="Name" className="px-4 py-2 border border-gray-300 rounded" />
                    {/* Input field for email */}
                    <input type="email" placeholder="Email" className="px-4 py-2 border border-gray-300 rounded" />
                    {/* Textarea for message */}
                    <textarea rows={4} placeholder="Message" className="px-4 py-2 border border-gray-300 rounded"></textarea>
                    {/* Button for submitting the form */}
                    <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Submit</button>
                </form>
            </section>

            {/* Footer */}
            <footer className="text-center bg-sky-900 text-white p-4 mt-auto w-full">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
}
