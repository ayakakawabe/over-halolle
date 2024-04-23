const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;
const QIITA_TOKEN=import.meta.env.VITE_QIITA_TOKEN;

export interface GetUserDataResponse{
    description: string;
    facebook_id: string;
    followees_count: number;
    followers_count: number;
    github_login_name: string;
    id: string;
    items_count: number;
    linkedin_id: string;
    location: string;
    name: string;
    organization: string;
    permanent_id: number;
    profile_image_url: string;
    team_only: boolean;
    twitter_screen_name: string;
    website_url: string;
};

export interface GetUserDataErrorResponse{
    message: string;
    type: string; 
};

export const getUserData=async(userId:string):Promise<GetUserDataResponse|GetUserDataErrorResponse>=>{
    const response= await fetch(`https://qiita.com/api/v2/users/${userId}`,{
        method:"GET",
        headers:{
            'Authentication': 'Bearer '+QIITA_TOKEN,
            "Content-Type":'application/json'
        }
    });
    const data=response.json();
    return data;
};

export const setUserData=async(userId:number,QiitaId:string):Promise<{status:number}>=>{
    const postData={userId:userId,qiitaId:QiitaId};
    console.log("<qiita api (setUserData)> POST : ",postData);
    const response = await fetch(BACKEND_URL);
    const data=response.json();
    console.log("<qiita api (setUserData)> GET : ",{status:response.status});
    return {status:response.status};
}

export const deleteUserData=async(userId:number):Promise<{status:number}>=>{
    const postData={userId:userId};
    console.log("qiita api (deleteUserData) POST : ",postData);
    const response =await fetch(BACKEND_URL);
    const data=response.json();
    console.log("qiita api (deleteUserData) GET : ",{status:response.status});
    return {status:response.status};
};