var stepData = [
  {
      id: 1,
      line: 2,
      callStack: [
          "main()"
      ],
      webapis: [],
      console: [],
      taskQueue: [],
      microTaskQueue: []
  },
  {
      id: 2,
      line: 2,
      callStack: [
          "main()",
          "log('start')"
      ],
      webapis: [],
      console: [],
      taskQueue: [],
      microTaskQueue: []
  },
  {
      id: 3,
      line: 2,
      callStack: [
          "main()",
      ],
      webapis: [],
      console: [
          'start'
      ],
      taskQueue: [],
      microTaskQueue: []
  },
  {
      id: 4,
      line: 4,
      callStack: [
          "main()",
          'setTimeout()'
      ],
      webapis: [

      ],
      console: [
          'start'
      ],
      taskQueue: [
      ],
      microTaskQueue: []
  },
  {
      id: 5,
      line: 4,
      callStack: [
          "main()",
      ],
      webapis: [
          'timer...'
      ],
      console: [
          'start'
      ],
      taskQueue: [
      ],
      microTaskQueue: []
  },
  {
      id: 6,
      line: 4,
      callStack: [
          "main()",
      ],
      webapis: [

      ],
      console: [
          'start'
      ],
      taskQueue: [
          "setTimeout cb()"
      ],
      microTaskQueue: []
  },
  {
      id: 7,
      line: 8,
      callStack: [
          "main()",
          "Promise()"
      ],
      webapis: [

      ],
      console: [
          'start'
      ],
      taskQueue: [
          "setTimeout cb()"
      ],
      microTaskQueue: [

      ]
  },
  {
    id: 8,
    line: 8,
    callStack: [
        "main()",
        "Promise()"
    ],
    webapis: [

    ],
    console: [
        'start'
    ],
    taskQueue: [
        "setTimeout cb()"
    ],
    microTaskQueue: [
        'then1'
    ]
},
  {
      id: 9,
      line: 10,
      callStack: [
          "main()",
          "Promise()"
      ],
      webapis: [

      ],
      console: [
          'start'
      ],
      taskQueue: [
          "setTimeout cb()"
      ],
      microTaskQueue: [
          'then1()',
          'then2()'
      ]
  },
  {
      id: 10,
      line: 12,
      callStack: [
          "main()",
      ],
      webapis: [

      ],
      console: [
          'start'
      ],
      taskQueue: [
          "setTimeout cb()"
      ],
      microTaskQueue: [
          'then1()',
          'then2()'
      ]
  },
  {
      id: 11,
      line: 14,
      callStack: [
          "main()",
          "log('end')"
      ],
      webapis: [

      ],
      console: [
          'start',
          'end'
      ],
      taskQueue: [
          "setTimeout cb()"
      ],
      microTaskQueue: [
          'then1()',
          'then2()'
      ]
  },
  {
      id: 12,
      line: 14,
      callStack: [
          "main()",
      ],
      webapis: [
      ],
      console: [
          'start',
          'end'
      ],
      taskQueue: [
          "setTimeout cb()"
      ],
      microTaskQueue: [
          "then1()",
          'then2()'
      ]
  },
  {
      id: 13,
      line: 9,
      callStack: [
          "main()",
          "then1()"
      ],
      webapis: [
      ],
      console: [
          'start',
          'end'
      ],
      taskQueue: [
          "setTimeout cb()"
      ],
      microTaskQueue: [
          'then2()'
      ]
  },
  {
      id: 14,
      line: 9,
      callStack: [
          "main()",
      ],
      webapis: [
      ],
      console: [
          'start',
          'end',
          'promise1'
      ],
      taskQueue: [
          "setTimeout cb()"
      ],
      microTaskQueue: [
          'then2()'
      ]
  },
  {
      id: 15,
      line: 11,
      callStack: [
          "main()",
          "then2()"
      ],
      webapis: [
      ],
      console: [
          'start',
          'end',
          'promise1'
      ],
      taskQueue: [
          "setTimeout cb()"
      ],
      microTaskQueue: [

      ]
  },
  {
      id: 16,
      line: 11,
      callStack: [
          "main()",
      ],
      webapis: [
      ],
      console: [
          'start',
          'end',
          'promise1',
          'promise2'
      ],
      taskQueue: [
          "setTimeout cb()"
      ],
      microTaskQueue: [

      ]
  },
  {
      id: 17,
      line: 5,
      callStack: [
          "main()",
          "setTimeout cb()"
      ],
      webapis: [
      ],
      console: [
          'start',
          'end',
          'promise1',
          'promise2'
      ],
      taskQueue: [

      ],
      microTaskQueue: [

      ]
  },
  {
      id: 18,
      line: 5,
      callStack: [
          "main()",
      ],
      webapis: [
      ],
      console: [
          'start',
          'end',
          'promise1',
          'promise2',
          'setTimeout'
      ],
      taskQueue: [

      ],
      microTaskQueue: [

      ]
  }
]
