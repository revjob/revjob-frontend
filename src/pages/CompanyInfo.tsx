import { CompanyDataType } from "@/utils/types"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function CompanyInfo() {

    return (
        // Container div for the entire home page content
        <div className="flex flex-col w-full items-center justify-center bg-sky-50">
            {/* Main Text Content */}
            <section className="text-center my-8">
                {/* Heading for the main text content */}
                <h1 className="text-4xl font-bold mb-4">Company Name</h1>
                {/* Paragraph for the main text content */}
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies magna in magna varius, ac posuere est volutpat.</p>
            </section>

            {/* Features Section */}
            <section className="bg-white py-12 px-6 my-8">
                <Tabs defaultValue="account" className="w-[400px] flex flex-col items-center">
                    <TabsList>
                        <TabsTrigger value="reviews">Reviews</TabsTrigger>
                        <TabsTrigger value="salary">Salary</TabsTrigger>
                    </TabsList>
                    <TabsContent value="reviews">
                        
                        List of reviews goes here
                        
                    </TabsContent>
                    <TabsContent value="salary">
                    
                        List of salaries goes here

                    </TabsContent>
                </Tabs>

            </section>
        </div>
    );
}