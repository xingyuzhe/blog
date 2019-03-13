var singleNumber = function(nums) {
    return nums.reduce((prev, next) => prev ^ next, 0)
};
