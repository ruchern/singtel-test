import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home'

describe('Home', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Home, {
      data () {
        return {
          items: {
            bars: [0, 1, 2],
            buttons: [-1, 0, 1, 2],
            limit: 120
          }
        }
      }
    })
  })

  test('should retrieve array of objects from the API call', async () => {
    await wrapper.vm.getData()

    expect(wrapper.vm.items.bars.length).toBeGreaterThan(0)
    expect(wrapper.vm.items.buttons.length).toBeGreaterThan(0)
    expect(wrapper.vm.items.limit).not.toBeNull()
  })

  test('should have a default selected progress bar', () => {
    expect(wrapper.vm.selectedProgressBar).toBe(0)
  })

  test('should set selectedProgressBar correctly when an option in the select menu has changed', () => {
    expect(wrapper.vm.selectedProgressBar).toBe(0)

    const select = wrapper.find('select')
    select.element.value = 1
    select.trigger('change')

    expect(wrapper.vm.selectedProgressBar).toBe(1)
  })

  test('should remain at 0 when value is attempting to reduce below 0', () => {
    expect(wrapper.vm.items.bars[0]).toBe(0)

    wrapper.vm.setValue(-50)

    expect(wrapper.vm.items.bars[0]).toBe(0)
  })

  test('should increase value of progress bar by the value', () => {
    expect(wrapper.vm.items.bars[0]).toBe(0)

    wrapper.vm.setValue(100)

    expect(wrapper.vm.items.bars[0]).toBe(100)
  })
})
