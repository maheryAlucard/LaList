<script>
import { useRouter } from 'vue-router'
import { getFromStorage, EStoreKey } from '@/Utils/storage'

const router = useRouter()
export default {
  mounted: () => {
    const userData = getFromStorage(EStoreKey.USER)
    if (userData && userData.logged) {
      router.replace({ path: '/item-lists' })
    } else {
      router.replace({ path: '/item-lists' }) // '/login'
    }
  },
}
</script>

<style>
.main-container {
  flex: 1;
}
</style>
