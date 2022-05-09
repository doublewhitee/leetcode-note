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
            '/algorithm/1_BinarySearch/1_binary_search.md'
          ]
        },
        {
          title: '双指针',
          children: [
            '/algorithm/2_DoublePointer/1_squares_of_a_sorted_array.md',
            '/algorithm/2_DoublePointer/2_rotate-array.md',
            '/algorithm/2_DoublePointer/3_permutation_in_string.md'
          ]
        },
        {
          title: '广度优先搜索 / 深度优先搜索',
          children: [
            '/algorithm/3_Breadth-firstSearch&Depth-firstSearch/1_01_matrix.md'
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
