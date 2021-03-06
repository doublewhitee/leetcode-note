module.exports = {
  title: 'Whitee',
  description: 'LeetCode Note',
  base: '/leetcode-note/',
  head: [
    ['link', { rel: 'icon', href: '/icons/192x192.png' }]
  ],
  themeConfig: {
    nav: [
      { 
        text: '算法',
        items: [
          { text: '二分查找', link: '/algorithm/1_BinarySearch/1_binary_search.md' },
          { text: '双指针', link: '/algorithm/2_DoublePointer/1_squares_of_a_sorted_array.md' },
          { text: '广度优先搜索 / 深度优先搜索', link: '/algorithm/3_Breadth-firstSearch&Depth-firstSearch/1_01_matrix.md' },
          // { text: '递归 / 回溯', link: '/algorithm/4_Recursion&Backtracking/1_squares_of_a_sorted_array.md' },
          { text: '贪心算法', link: '/algorithm/5_GreedyAlgorithm/1_jump_game.md' },
          { text: '动态规划', link: '/algorithm/6_DynamicProgramming/1_house_robber.md' },
          { text: '位运算', link: '/algorithm/7_BitManipulation/0_introduction.md' },
        ]
      },
      { 
        text: '数据结构',
        items: [
          { text: '数组', link: '/dataStructure/1_Array/1_maximum_subarray.md' },
          { text: '字符串', link: '/dataStructure/2_String/1_longest_substring_without_repeating_characters.md' },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/doublewhitee' },
    ],
    search: true,
    searchMaxSuggestions: 5,
    sidebarDepth: 1,
    sidebar: {
      '/algorithm/': [
        {
          title: '二分查找',
          children: [
            '/algorithm/1_BinarySearch/1_binary_search.md',
            '/algorithm/1_BinarySearch/2_search_a_2d_matrix.md'
          ]
        },
        {
          title: '双指针',
          children: [
            '/algorithm/2_DoublePointer/1_squares_of_a_sorted_array.md',
            '/algorithm/2_DoublePointer/2_rotate-array.md',
            '/algorithm/2_DoublePointer/3_permutation_in_string.md',
            '/algorithm/2_DoublePointer/4_subarray_product_less_than_k.md'
          ]
        },
        {
          title: '广度优先搜索 / 深度优先搜索',
          children: [
            '/algorithm/3_Breadth-firstSearch&Depth-firstSearch/1_01_matrix.md',
            '/algorithm/3_Breadth-firstSearch&Depth-firstSearch/2_shortest_path_in_binary_matrix.md'
          ]
        },
        {
          title: '贪心算法',
          children: [
            '/algorithm/5_GreedyAlgorithm/1_jump_game.md'
          ]
        },
        {
          title: '动态规划',
          children: [
            '/algorithm/6_DynamicProgramming/1_house_robber.md',
            '/algorithm/6_DynamicProgramming/2_longest_palindromic_substring.md',
            '/algorithm/6_DynamicProgramming/3_longest_increasing_subsequence.md',
            '/algorithm/6_DynamicProgramming/4_longest_common_subsequence.md',
            '/algorithm/6_DynamicProgramming/5_coin_change.md',
            '/algorithm/6_DynamicProgramming/6_partition_equal_subset_sum.md'
          ]
        },
        {
          title: '位运算',
          children: [
            '/algorithm/7_BitManipulation/0_introduction.md',
            '/algorithm/7_BitManipulation/1_power_of_two.md',
            '/algorithm/7_BitManipulation/2_reverse_bits.md',
          ]
        }
      ],
      '/dataStructure/': [
        {
          title: '数组',
          children: [
            '/dataStructure/1_Array/1_maximum_subarray.md'
          ]
        },
        {
          title: '字符串',
          children: [
            '/dataStructure/2_String/1_longest_substring_without_repeating_characters.md'
          ]
        }
      ],
    },
    nextLinks: true,
    prevLinks: true
  }
}
