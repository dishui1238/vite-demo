import { useRouter } from 'vue-router';
import { useTabStore } from './../../store/tabStore';
import { computed } from 'vue';
import { DropMenu, MenuEventEnum } from './types'

export function useTabDropdown() {

  const tabStore = useTabStore()
  const router = useRouter()

  const getDropMenuList = computed(() => {
    const isCurItem = true
    const dropMenuList: DropMenu[] = [
      {
        icon: '',
        text: '重新加载',
        event: MenuEventEnum.REFRESH_PAGE,
        disabled: isCurItem
      },
      {
        icon: '',
        text: '关闭标签页',
        event: MenuEventEnum.CLOSE_CURRENT,
        disabled: isCurItem
      },
      {
        icon: '',
        text: '关闭左侧标签页',
        event: MenuEventEnum.CLOSE_LEFT,
        disabled: isCurItem
      },
      {
        icon: '',
        text: '关闭右侧标签页',
        event: MenuEventEnum.CLOSE_RIGHT,
        disabled: isCurItem
      },
      {
        icon: '',
        text: '关闭其它标签页',
        event: MenuEventEnum.CLOSE_OTHER,
        disabled: isCurItem
      },
      {
        icon: '',
        text: '关闭全部标签页',
        event: MenuEventEnum.CLOSE_ALL,
        disabled: isCurItem
      },
    ]
    return dropMenuList
  })

  async function handleMenuEvent(menu: DropMenu) {
    const { event } = menu

    switch (event) {
      case MenuEventEnum.REFRESH_PAGE:
        await tabStore.refreshPage(router)
        break;

      default:
        break;
    }
  }

  return { getDropMenuList, handleMenuEvent }
}