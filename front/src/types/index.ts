
export interface ContextoProps{
    alvo: string;
    data: TmdbDefault | undefined;
    loading: boolean;
    page:number;
    setLoading: Function;
    setAlvo: Function;
    setData: Function;
    setPage: (value:number) => void;
}

export interface TmdbData{
    id:number;
    title: string;
    original_title:string;
    runtime:string;
    release_date:string;
    overview:string;
    poster_path:string
}

export interface TmdbDefault{
    page: number;
    results: TmdbData[];
    total_pages:number;
    total_results:number
}



export interface card{
    moviedata: any;
}

export interface Movie {
    imgLink:string;
    movieId:number;
    title:string;
  
  }
  