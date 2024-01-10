import Card from "./Card";

const Section = () =>
{
    return (
        <div className='grid grid-cols-2 p-6'>
            <Card title="My hobbies" p="I have many hobbies mostly related to sports. At the moment, I practice darts 
                        most intensively, and my successes are 1 won tournament and 17th place out of 78 
                        in the 30-year Bulgarian Darts Federation tournament. I often play football and have many medals.
                        I love watching Formula 1, although for some people the drivers are just going around in circle."/>
            
            <Card title="My interests in school" p="At school we always learn a lot of new and interesting things. Circumstances came together so that now 
                        I mainly deal with web and mobile applications, but I am open to all kinds of new technologies. 
                        In general, I use my time at school to gain as much knowledge as possible. 
                        Also from the main subjects I love History as I know /used to know/ the entire medieval history of Bulgaria 
                        as well as Geography as I know all the countries and flags as well as 160 out of 197 capitals." />
        </div>
    );
}

export default Section;