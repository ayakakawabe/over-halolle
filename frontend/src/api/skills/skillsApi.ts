const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;

export type GetAllResponse=Array<{
    skill:string,
    level:number,
    color:string
}>|null;

export const getAll=async(userId:number):Promise<{status:number,data:GetAllResponse}>=>{
    const postData={userId:userId};
    console.log("<skills api (getAll)> POST : ",postData);
    const response= await fetch(BACKEND_URL);
    const data=response.json();
    console.log("<skills api (getAll)> GET : ",{status:response.status,
        data:[{skill:"Python",level:60,color:"#3572A5"},{skill:"Docker",level:50,color:"#384d54"},{skill:"C#",level:10,color:"#178600"},{skill:"Linux",level:80,color:"pink"},{skill:"GitHub",level:80,color:"gray"},{skill:"Go",level:80,color:"#00ADD8"}]
    });
    return {
        status:response.status,
        data:[
            {skill:"Python",level:60,color:"#3572A5"},
            {skill:"Docker",level:50,color:"#384d54"},
            {skill:"C#",level:10,color:"#178600"},
            {skill:"Linux",level:80,color:"pink"},
            {skill:"GitHub",level:80,color:"gray"},
            {skill:"Go",level:80,color:"#00ADD8"}
        ]};
};

export type GetForEachResponse=Array<{
    date:string,
    level:number
}>;

export const getForEach=async(userId:number,skill:string):Promise<{status:number,data:GetForEachResponse}>=>{
    const postData={userId:userId,skill:skill};
    console.log("<skills api (getForEach)> POST : ",postData);
    const response= await fetch(BACKEND_URL);
    const data=response.json();
    console.log("<skills api (getForEach)> GET : ",{
        status:response.status,data:
        [{date:"23.1.1",level:10},{date:"23.2.1",level:20},{date:"23.3.1",level:30},{date:"23.4.1",level:40},{date:"23.5.10",level:45},{date:"23.10.10",level:60}]
    });
    return {
        status:response.status,
        data:[
            {date:"23.1.1",level:10},
            {date:"23.2.1",level:20},
            {date:"23.3.1",level:30},
            {date:"23.4.1",level:40},
            {date:"23.5.10",level:45},
            {date:"23.10.10",level:60},
        ]
    };
};

export type GetSkillsListResponse=Array<string>;

export const getSkillsList=async():Promise<{status:number,data:GetSkillsListResponse}>=>{
    console.log("<skills api (getForEach)> POST : ","なし");
    const response= await fetch(BACKEND_URL);
    const data=response.json();
    console.log("<skills api (getSkillsList)> GET : ",{status:response.status,data:["Python","C#","C","C++","Go","JavaScript","TypeScript","Docker","FireBase","AWS"]});
    return {status:response.status,data:["Python","C#","C","C++","Go","JavaScript","TypeScript","Docker","FireBase","AWS"]};
};