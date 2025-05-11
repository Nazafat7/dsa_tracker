
const initialTopicsData = [
    {
        title: "Algorithms",
        description: "Explore fundamental algorithms used in computer science.",
        subTopics: [
            { name: "Sorting Algorithms", leetCodeLink: "https://leetcode.com/tag/sorting/", youTubeLink: "https://www.youtube.com/watch?v=Rf_M95S4Lg8", articleLink: "https://www.geeksforgeeks.org/sorting-algorithms/", level: "Easy", status: false },
            { name: "Searching Algorithms", leetCodeLink: "https://leetcode.com/tag/binary-search/", youTubeLink: "https://www.youtube.com/watch?v=K2Y_7M-MWY0", articleLink: "https://www.geeksforgeeks.org/searching-algorithms/", level: "Easy", status: false },
            { name: "Dynamic Programming", leetCodeLink: "https://leetcode.com/tag/dynamic-programming/", youTubeLink: "https://www.youtube.com/watch?v=oBt53YbR9Kk", articleLink: "https://www.geeksforgeeks.org/dynamic-programming/", level: "Medium", status: false },
            { name: "Greedy Algorithms", leetCodeLink: "https://leetcode.com/tag/greedy/", youTubeLink: "https://www.youtube.com/watch?v=bC7o8P_Ste4", articleLink: "https://www.geeksforgeeks.org/greedy-algorithms/", level: "Medium", status: false },
            { name: "Divide and Conquer", leetCodeLink: "https://leetcode.com/tag/divide-and-conquer/", youTubeLink: "https://www.youtube.com/watch?v=2Rr2tW9zvJI", articleLink: "https://www.geeksforgeeks.org/divide-and-conquer-algorithm/", level: "Medium", status: false },
            { name: "Backtracking", leetCodeLink: "https://leetcode.com/tag/backtracking/", youTubeLink: "https://www.youtube.com/watch?v=REhF9TpwBgQ", articleLink: "https://www.geeksforgeeks.org/backtracking-algorithms/", level: "Hard", status: false }
        ]
    },
    {
        title: "Data Structures",
        description: "Learn about essential data structures and their applications.",
        subTopics: [
            { name: "Arrays & Strings", leetCodeLink: "https://leetcode.com/tag/array/", youTubeLink: "https://www.youtube.com/watch?v=ZovS2F02v2A", articleLink: "https://www.geeksforgeeks.org/array-data-structure/", level: "Easy", status: false },
            { name: "Linked Lists", leetCodeLink: "https://leetcode.com/tag/linked-list/", youTubeLink: "https://www.youtube.com/watch?v=ChWWEncl76Y", articleLink: "https://www.geeksforgeeks.org/data-structures/linked-list/", level: "Easy", status: false },
            { name: "Trees (Binary, BST)", leetCodeLink: "https://leetcode.com/tag/tree/", youTubeLink: "https://www.youtube.com/watch?v=oSWTXtMglKE", articleLink: "https://www.geeksforgeeks.org/binary-tree-data-structure/", level: "Medium", status: false },
            { name: "Graphs", leetCodeLink: "https://leetcode.com/tag/graph/", youTubeLink: "https://www.youtube.com/watch?v=cWNEl4HE2OE", articleLink: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/", level: "Hard", status: false },
            { name: "Heaps & Priority Queues", leetCodeLink: "https://leetcode.com/tag/heap-priority-queue/", youTubeLink: "https://www.youtube.com/watch?v=B7hVxCmfPtM", articleLink: "https://www.geeksforgeeks.org/heap-data-structure/", level: "Medium", status: false },
            { name: "Hash Tables", leetCodeLink: "https://leetcode.com/tag/hash-table/", youTubeLink: "https://www.youtube.com/watch?v=shs0KM3wKv8", articleLink: "https://www.geeksforgeeks.org/hashing-data-structure/", level: "Easy", status: false }
        ]
    },
    {
        title: "Databases",
        description: "Fundamentals of database systems and SQL.",
        subTopics: [
            { name: "SQL Basics", leetCodeLink: "https://leetcode.com/problems/combine-two-tables/", youTubeLink: "https://www.youtube.com/watch?v=HXV3zeQKqGY", articleLink: "https://www.w3schools.com/sql/", level: "Easy", status: false },
            { name: "Normalization", leetCodeLink: "#", youTubeLink: "https://www.youtube.com/watch?v=GFQaEYH9kXo", articleLink: "https://www.geeksforgeeks.org/database-normalization-normal-forms/", level: "Medium", status: false },
            { name: "Joins", leetCodeLink: "https://leetcode.com/problems/employees-earning-more-than-their-managers/", youTubeLink: "https://www.youtube.com/watch?v=2HVMi26Lg1A", articleLink: "https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/", level: "Medium", status: false }
        ]
    },
    {
        title: "Operating Systems",
        description: "Core concepts of operating systems.",
        subTopics: [
            { name: "Processes & Threads", leetCodeLink: "#", youTubeLink: "https://www.youtube.com/watch?v=1iA4Okon32Q", articleLink: "https://www.geeksforgeeks.org/processes-and-threads/", level: "Medium", status: false },
            { name: "Memory Management", leetCodeLink: "#", youTubeLink: "https://www.youtube.com/watch?v=qs_8rfV2I2Y", articleLink: "https://www.geeksforgeeks.org/memory-management-in-operating-system/", level: "Hard", status: false },
            { name: "Synchronization", leetCodeLink: "#", youTubeLink: "https://www.youtube.com/watch?v=A8tFZP6k2rA", articleLink: "https://www.geeksforgeeks.org/introduction-of-process-synchronization/", level: "Hard", status: false }
        ]
    }
    
];

module.exports = { initialTopicsData };