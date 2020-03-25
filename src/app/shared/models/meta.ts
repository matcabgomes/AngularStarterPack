export interface Meta<T> {
    _meta: {
        success: boolean,
        code: number,
        message: string,
        totalCount: number,
        pageCount: number,
        currentPage: number,
        perPage: number,
        rateLimit: {
          limit: number,
          remaining: number,
          reset: number
        }

    };
    result: T[];
}
