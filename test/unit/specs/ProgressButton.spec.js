import { shallowMount } from '@vue/test-utils'
import ProgressButton from '@/components/ProgressButton'

describe('ProgressButton', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(ProgressButton)
  })

  test('should format value with a positive sign when the value is positive', () => {
    wrapper.setProps({ button: 50 })

    expect(wrapper.find('button').text()).toContain('+')
  })

  test('should format value with a negative sign when the value is negative', () => {
    wrapper.setProps({ button: -25 })

    expect(wrapper.find('button').text()).toContain('-')
  })

  test('should emitted setValue event when button is clicked', () => {
    wrapper.find('button').trigger('click')

    expect(wrapper.emitted().setValue).toBeTruthy()
  })
})
