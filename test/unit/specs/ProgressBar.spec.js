import { shallowMount } from '@vue/test-utils'
import ProgressBar from '@/components/ProgressBar'

describe('ProgressBar', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(ProgressBar, {
      attachTo: document.body
    })
  })

  test('should not have exceeded limit when the value of bar is lower than the value of limit', () => {
    wrapper.setProps({
      bar: 50,
      limit: 100
    })

    expect(wrapper.vm.hasExceedLimit).toBe(false)
  })

  test('should have exceeded limit when the value of bar is higher than the value of limit', () => {
    wrapper.setProps({
      bar: 220,
      limit: 120
    })

    expect(wrapper.vm.hasExceedLimit).toBe(true)
  })
})
