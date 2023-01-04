// export const  getblogModal = async () => {
//     const requestOptions = {
//       method: "GET",
//       headers: {
//         Authorization: "Bearer KmFmRhJk-8Gbeoui88FhLapa9jZRieKyp_ZriuHlofs",
//       },
//     };
//     const blogModal = await fetch(
//       "https://cdn.contentful.com/spaces/0uk0rl0l436k/environments/dynamic-journey-mock/entries?sys.id=238vlcbj4BsUT0JDsF9i9x",
//       requestOptions
//     ).then(async (res) => {
//       const result = await res.json();
      
//       if (result && result.includes && result.includes.Entry[0]) {
//       console.log("statiscprops", result.includes.Entry)
//       return  result.includes.Entry

//       }
//     });

//     return blogModal; 
//   }

//   export const fetchBlogPageData = async () => {

//     const requestOptions = {
//       method: "GET",
//       headers: {
//         Authorization: "Bearer KmFmRhJk-8Gbeoui88FhLapa9jZRieKyp_ZriuHlofs",
//       },
//     };
//     const blog = await fetch(
//       "https://cdn.contentful.com/spaces/0uk0rl0l436k/environments/dynamic-journey-mock/entries?sys.id=WTjIgfi3Pm5tx4imQy1Bx",
//       requestOptions
//     ).then(async (res) => {
//       const result = await res.json();

//       console.log("result.includes.Entry", result.includes.Entry)
      
//       if (result && result.includes && result.includes.Entry[0]) {
//         return result.includes.Entry
//       }
//     });

//     return blog;
// }

// export const getBlogHeader: () => any = async () => {
//   const result = await Axios({
//     method: 'GET',
//     url: '/book/form',
//   });
//   return result.data;
// };

  
