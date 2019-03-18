type Transition = {
  name: string
  from: string | Array<string>
  to: string | Function
}

type ObserveObject = {
  [propName: string]: Function
}

type InitOptionsData = {
  [propName: string]: any
}

type InitOptions = {
  init: string
  transitions: Array<Transition>
  methods: ObserveObject
  data:
    | InitOptionsData
    | {
        (): InitOptionsData
      }
}

abstract class LifeCircleEvents {
  // In order to track or perform an action when a transition occurs, five general-purpose lifecycle events can be observed:
  // To recap, the lifecycle of a transition occurs in the following order:
  // fired before any transition
  abstract onBeforeTransition(t: Transition): boolean | void
  // onBefore<TRANSITION> - fired before a specific TRANSITION
  // fired when leaving any state
  abstract onLeaveState(t: Transition): boolean | void
  // onLeave<STATE> - fired when leaving a specific STATE
  // fired during any transition
  abstract onTransition(t: Transition): boolean | void
  // fired when entering any state
  abstract onEnterState(t: Transition): void
  // onEnter<STATE> - fired when entering a specific STATE
  // fired after any transition
  abstract onAfterTransition(t: Transition): void

  // lifecycle events can be observed using an observer method
  abstract observe(eventName: string, callback: Function): void
  abstract observe(obj: ObserveObject): void
  abstract observe(obj: string | ObserveObject, callback?: Function): void
  // onAfter<TRANSITION> - fired after a specific TRANSITION
  // on<TRANSITION> - convenience shorthand for onAfter<TRANSITION>

  // By default, if you try to fire a transition that is not allowed in the current state,
  // the state machine will throw an exception. If you prefer to handle the problem yourself,
  // you can define a custom onInvalidTransition handler:
  abstract onInvalidTransition(t: Transition, from: string, to: string): void

  // By default, if you try to fire a transition during a Lifecycle Event for a pending transition,
  // the state machine will throw an exception. If you prefer to handle the problem yourself,
  // you can define a custom onPendingTransition handler:
  abstract onPendingTransition(t: Transition, from: string, to: string): void
}

abstract class AbstractNiceStateMachine {
  // current state property
  abstract state: string
  // list of transitions that are allowed from the current state
  abstract transitions: Array<Transition>
  // list of all possible transitions
  abstract allTransitions: Array<Transition>
  // list of all possible states
  abstract allStates: Array<string>
  // return true if state s is the current state
  abstract is(s: string): boolean
  // return true if transition t can occur from the current state
  abstract can(t: Transition): boolean
  // return true if transition t cannot occur from the current state
  abstract cannot(t: Transition): boolean
}

const defaultConfig = {
  defaultInitState: 'init',
}

const STATE = Symbol('NiceStateMachine#state')

export class NiceStateMachine implements AbstractNiceStateMachine {
  constructor() {}

  [STATE] = ''

  get state() {
    return ''
  }

  get transitions() {
    return []
  }

  get allTransitions() {
    return []
  }

  get allStates() {
    return []
  }

  is(state: string) {
    return true
  }

  can(t: Transition) {
    return true
  }

  cannot(t: Transition) {
    return true
  }
}
