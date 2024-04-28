import { CompanyCard } from "@/components/CompanyCard";
import { companyData } from "@/utils/mock";

// Defining the About component responsible for rendering the about page content
export default function ExploreCompanies() {

    return (
        // Container div for the entire about page content
        <div className="flex flex-col w-full items-center justify-center bg-sky-50">
            {/* Section for main text content */}
            <section className="text-center my-8">
                {/* Heading for the main text content */}
                <h1 className="text-4xl font-bold mb-4">Explore Companys</h1>
                {/* Paragraph for the main text content */}
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies magna in magna varius, ac posuere est volutpat.</p>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {companyData.map((card, index) => (
                    <CompanyCard
                        key={index}
                        id={card.id}
                        companyName={card.companyName} 
                        description={card.description}
                        averageRating={card.averageRating}
                        verifiedAddresses={card.verifiedAddresses}
                        loading={false}
                        reviews={card.reviews}
                        salaries={card.salaries}
                    />
                ))}
            </section> 
            

        </div>
    );
}