import CMS from "netlify-cms-app"
import { EditorComponentVideo } from "./body-video"
import { EditorComponentVimeo } from "./body-vimeo"

CMS.registerEditorComponent(EditorComponentVideo)
CMS.registerEditorComponent(EditorComponentVimeo)
CMS.init()
