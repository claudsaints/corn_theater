
export interface ContextoProps{
    alvo: string;
    data: Array<JSON>;
    setAlvo: Function;
    setData: Function;


}

export interface TmdbData{
    title: string;
    original_title:string;
    runtime:string;
    release_date:string;
    overview:string;
    poster_path:string
}



export interface card{
    moviedata: any;
}