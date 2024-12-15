import Accordion from "../components/Accordion";

function AccordionPage(){
    const items=[
    {id:"2314",title:"First Question",content:"This is the content for first question."},
    {id:"09dh",title:"Second Question",content:"This is the content for second question."},
    {id:"jj234",title:"Third Question",content:"This is the content for Third question."}
   ];
    return<div>
         <Accordion items={items}/>
    </div>;
}

export default AccordionPage;