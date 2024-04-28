import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CreateContribution() {

    return (
        <div className="flex flex-col w-full items-center justify-center bg-sky-50">
            <section className="bg-white py-12 px-6 my-8">
                <Tabs defaultValue="review" className="w-[400px]">
                    <TabsList >
                        <TabsTrigger value="review">Review</TabsTrigger>
                        <TabsTrigger value="salary">Salary</TabsTrigger>
                    </TabsList>
                    <TabsContent value="review">Make a review about the company you works.</TabsContent>
                    <TabsContent value="salary">Share your position salary.</TabsContent>
                </Tabs>
            </section>
        </div>
    )
}