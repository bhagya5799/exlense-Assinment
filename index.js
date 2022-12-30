// ****problem statement***************
// My task is to filter out my apartment as per the amenities available nearby, like the pool, school, gym etc.


// **************Approach*******************
// first i have to find iterate the each blocks Array, and each requirement Array and filter the which block
//  has my requires  select the index of block
function apartmentHunting(blocks,reqs){
    let length_of_block=blocks.length
    // find blocks length
    let len_of_req=reqs.length
    // find reqs length
    let sum=0
    // sum 
    let final_result=0 
    for (let i=0; i<length_of_block; i++){
        // iterate the each block
        let count=0
        // count the how many amenities present hear
        for (let j=0; j<len_of_req; j++){
            // iterate the reqs 
            if (blocks[i][reqs[j]]===true){
                // compare each block of reqs equal to present or not 
                // if present? increase the count_present value
                count+=1
            }
        }
        // final check if count > sum value, store the count value to sum variable
        if (count>sum){
            sum=count
            // and we find index of block so we need to store the index of block nbr in  new variable 
            final_result=i
            // store index nbr in final_result
        }   
    }
    return final_result
    // return index nbr
}
exports.apartmentHunting = apartmentHunting;
// export the function to another file(data.js)
