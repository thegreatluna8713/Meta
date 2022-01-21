import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item"
import Script2 from "../1d7e46b3-bfce-42bf-8d3c-cb9acebbf4ca/src/item"
import Script3 from "../d367d3f2-9696-4d61-985a-7988fbf5f50d/src/item"
import Script4 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script5 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script6 from "../3bc461a1-e060-4e46-b80c-4b016678a7f9/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const glossyaethereatiles = new Entity('glossyaethereatiles')
engine.addEntity(glossyaethereatiles)
glossyaethereatiles.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyaethereatiles.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
glossyaethereatiles.addComponentOrReplace(gltfShape)

const videoStream = new Entity('videoStream')
engine.addEntity(videoStream)
videoStream.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(4.5, 1.5, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 0.9999999403953552)
})
videoStream.addComponentOrReplace(transform3)

const facebookLink = new Entity('facebookLink')
engine.addEntity(facebookLink)
facebookLink.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(9, 1, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
facebookLink.addComponentOrReplace(transform4)

const instagramLink = new Entity('instagramLink')
engine.addEntity(instagramLink)
instagramLink.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(7.5, 1, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
instagramLink.addComponentOrReplace(transform5)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(12, 1.5, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.375, 2.53125, 1)
})
imageFromURL.addComponentOrReplace(transform6)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(5, 1.5, 15.5),
  rotation: new Quaternion(-5.67359905191407e-15, 1, -1.1920926823449918e-7, 0),
  scale: new Vector3(3.375, 2.53125, 1)
})
imageFromURL2.addComponentOrReplace(transform7)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(11.5, 1.5, 15.5),
  rotation: new Quaternion(-5.67359905191407e-15, 1, -1.1920926823449918e-7, 0),
  scale: new Vector3(3.375, 2.53125, 1)
})
imageFromURL3.addComponentOrReplace(transform8)

const imageFromURL4 = new Entity('imageFromURL4')
engine.addEntity(imageFromURL4)
imageFromURL4.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(5, 6, 15.5),
  rotation: new Quaternion(-5.67359905191407e-15, 1, -1.1920926823449918e-7, 0),
  scale: new Vector3(3.375, 2.53125, 1)
})
imageFromURL4.addComponentOrReplace(transform9)

const imageFromURL5 = new Entity('imageFromURL5')
engine.addEntity(imageFromURL5)
imageFromURL5.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(11.5, 6, 15.5),
  rotation: new Quaternion(-5.67359905191407e-15, 1, -1.1920926823449918e-7, 0),
  scale: new Vector3(1.8984370231628418, 2.84765625, 0.9999998807907104)
})
imageFromURL5.addComponentOrReplace(transform10)

const imageFromURL6 = new Entity('imageFromURL6')
engine.addEntity(imageFromURL6)
imageFromURL6.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(12, 6.5, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.375, 2.53125, 1)
})
imageFromURL6.addComponentOrReplace(transform11)

const imageFromURL7 = new Entity('imageFromURL7')
engine.addEntity(imageFromURL7)
imageFromURL7.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(5, 6.5, 0.4999999403953552),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.375, 2.53125, 1)
})
imageFromURL7.addComponentOrReplace(transform12)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(8.5, 2, 15.5),
  rotation: new Quaternion(-5.7086314875795605e-15, -1, 1.1920928244535389e-7, -1.4901161193847656e-8),
  scale: new Vector3(1, 1, 1)
})
externalLink.addComponentOrReplace(transform13)

const imageFromURL9 = new Entity('imageFromURL9')
engine.addEntity(imageFromURL9)
imageFromURL9.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(5, 11.5, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.375, 2.53125, 1)
})
imageFromURL9.addComponentOrReplace(transform14)

const imageFromURL10 = new Entity('imageFromURL10')
engine.addEntity(imageFromURL10)
imageFromURL10.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(4.5, 11, 15.5),
  rotation: new Quaternion(-5.67359905191407e-15, 1, -1.1920926823449918e-7, 0),
  scale: new Vector3(3.375, 2.53125, 1)
})
imageFromURL10.addComponentOrReplace(transform15)

const imageFromURL11 = new Entity('imageFromURL11')
engine.addEntity(imageFromURL11)
imageFromURL11.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(11, 11, 15.5),
  rotation: new Quaternion(-5.67359905191407e-15, 1, -1.1920926823449918e-7, 0),
  scale: new Vector3(3.375, 2.53125, 1)
})
imageFromURL11.addComponentOrReplace(transform16)

const imageFromURL12 = new Entity('imageFromURL12')
engine.addEntity(imageFromURL12)
imageFromURL12.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(12, 11.5, 0.5),
  rotation: new Quaternion(5.842586783572513e-15, 0, 1.0571503965457491e-14, -1),
  scale: new Vector3(1.898437261581421, 2.84765625, 1.0000001192092896)
})
imageFromURL12.addComponentOrReplace(transform17)

const triggerTileSquare = new Entity('triggerTileSquare')
engine.addEntity(triggerTileSquare)
triggerTileSquare.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(2, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
triggerTileSquare.addComponentOrReplace(transform18)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script1.spawn(videoStream, {"startOn":true,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream","actionId":"toggle","values":{}}],"image":"https://github.com/thegreatluna8713/Decentraland/blob/master/_DSF4965.jpg","customStation":"<iframe width=\"1069\" height=\"601\" src=\"https://www.youtube.com/embed/_Zc5WljykHs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>","onActivate":[{"entityName":"videoStream","actionId":"activate","values":{}}],"station":"https://theuniverse.club/live/genesisplaza/index.m3u8"}, createChannel(channelId, videoStream, channelBus))
script2.spawn(facebookLink, {"url":"shopgakhi","bnw":false,"name":"Visit Us"}, createChannel(channelId, facebookLink, channelBus))
script3.spawn(instagramLink, {"url":"gakhiboutique","bnw":false}, createChannel(channelId, instagramLink, channelBus))
script4.spawn(imageFromURL, {"image":"https://github.com/thegreatluna8713/Decentraland/blob/master/_DSF4953.jpg"}, createChannel(channelId, imageFromURL, channelBus))
script4.spawn(imageFromURL2, {"image":"https://github.com/thegreatluna8713/Decentraland/blob/master/_DSF4984.jpg"}, createChannel(channelId, imageFromURL2, channelBus))
script4.spawn(imageFromURL3, {"image":"https://github.com/thegreatluna8713/Decentraland/blob/master/_DSF4969.jpg"}, createChannel(channelId, imageFromURL3, channelBus))
script4.spawn(imageFromURL4, {"image":"https://github.com/thegreatluna8713/Decentraland/blob/master/_DSF5040.jpg?raw=true"}, createChannel(channelId, imageFromURL4, channelBus))
script4.spawn(imageFromURL5, {"image":"https://github.com/thegreatluna8713/Decentraland/blob/master/_DSF5013.jpg"}, createChannel(channelId, imageFromURL5, channelBus))
script4.spawn(imageFromURL6, {"image":"https://github.com/thegreatluna8713/Decentraland/blob/master/_DSF4943.jpg"}, createChannel(channelId, imageFromURL6, channelBus))
script4.spawn(imageFromURL7, {"image":"https://github.com/thegreatluna8713/Decentraland/blob/master/_DSF4947.jpg"}, createChannel(channelId, imageFromURL7, channelBus))
script5.spawn(externalLink, {"url":"www.gakhi.com","name":"Shop Now"}, createChannel(channelId, externalLink, channelBus))
script4.spawn(imageFromURL9, {"image":"https://github.com/thegreatluna8713/Decentraland/blob/master/8%20copy%20-%20Copy.jpg"}, createChannel(channelId, imageFromURL9, channelBus))
script4.spawn(imageFromURL10, {"image":"https://github.com/thegreatluna8713/Decentraland/blob/master/Handbag%20QR%20Code.jpg"}, createChannel(channelId, imageFromURL10, channelBus))
script4.spawn(imageFromURL11, {"image":"https://github.com/thegreatluna8713/Decentraland/blob/master/Necklace%20with%20QR%20code.jpg?"}, createChannel(channelId, imageFromURL11, channelBus))
script4.spawn(imageFromURL12, {"image":"https://github.com/thegreatluna8713/Decentraland/blob/master/9%20copy%20-%20Copy.jpg"}, createChannel(channelId, imageFromURL12, channelBus))
script6.spawn(triggerTileSquare, {"enabled":true,"onEnter":[{"entityName":"videoStream","actionId":"activate","values":{}}]}, createChannel(channelId, triggerTileSquare, channelBus))