import HomeView from '../view/Home.js'
import AboutView from '../view/About.js'
import NotFoundView from '../view/NotFound.js'
import PostView from '../view/PostView.js'
import TagView from '../view/TagView.js'
import PostListView from '../view/PostListView.js'
import TagListView from '../view/TagListView.js'
import SettingView from '../view/SettingView.js'

const routes = [
  { path: "/",              view: HomeView },
  { path: "/about",         view: AboutView },
  { path: "/posts",         view: PostListView },
  { path: "/tags",          view: TagListView },
  { path: "/topic/:postId", view: PostView },
  { path: "/tag/:tagId",    view: TagView },
  { path: "/404",           view: NotFoundView },
  { path: "/settings",      view: SettingView },
]

export default routes
