import { useNavigate, useSearchParams } from "react-router-dom";

export function CompanyCard({ id, companyName, description, averageRating, verifiedAddresses, loading, reviews, salaries}:
    { id: string, companyName: string, description: string, averageRating: number, verifiedAddresses: object, loading: boolean, reviews: object, salaries: object}) {

    const navigate = useNavigate();
    
    return (
        <div className="flex bg-gradient-to-br from-base-200 to-base-300 shadow-lg rounded-xl overflow-hidden w-[300pt] transition-transform duration-200">
            {loading ?
                <div className="bg-gray-200 aspect-square rounded-xl object-cover w-full flex flex-col justify-center items-center">
                    Carregando papai
                </div>
                :
                
                <div className="bg-sky-100 rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold mb-2">PLANO DO PAI DE BIXO</h3>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button 
                            onClick={() => navigate('/exploreCompanies/${companyName}')}
                            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Sign Up</button>
                    </div>
            }
        </div>
    );
}