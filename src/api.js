export const fetchAllResorts = async () => {
    return await fetch("https://first-chair-api.vercel.app/api/v1/resorts");
  };

  export const fetchAllRuns = async () => {
    return await fetch("https://first-chair-api.vercel.app/api/v1/runs");
  };
