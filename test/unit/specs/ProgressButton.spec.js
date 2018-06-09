import { shallowMount } from '@vue/test-utils'
import ProgressButton from '@/components/ProgressButton'

describe('ProgressButton', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(ProgressButton)
  })

  test('should emitted setValue event when button is clicked', () => {
    wrapper.find('button').trigger('click')

    expect(wrapper.emitted().setValue).toBeTruthy()
  })
})
