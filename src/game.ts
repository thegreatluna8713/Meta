import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item"
import Script2 from "../1d7e46b3-bfce-42bf-8d3c-cb9acebbf4ca/src/item"
import Script3 from "../d367d3f2-9696-4d61-985a-7988fbf5f50d/src/item"
import Script4 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script5 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script6 from "../901e4555-8743-49bb-854c-c8b354a3e3e1/src/item"

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
  position: new Vector3(4.5, 0.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 0.9999999403953552)
})
videoStream.addComponentOrReplace(transform3)

const facebookLink = new Entity('facebookLink')
engine.addEntity(facebookLink)
facebookLink.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(9, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
facebookLink.addComponentOrReplace(transform4)

const instagramLink = new Entity('instagramLink')
engine.addEntity(instagramLink)
instagramLink.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(8, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
instagramLink.addComponentOrReplace(transform5)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(12, 0.5, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.375, 2.53125, 1)
})
imageFromURL.addComponentOrReplace(transform6)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(5, 0.5, 15),
  rotation: new Quaternion(-5.67359905191407e-15, 1, -1.1920926823449918e-7, 0),
  scale: new Vector3(3.375, 2.53125, 1)
})
imageFromURL2.addComponentOrReplace(transform7)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(12, 0.5, 15),
  rotation: new Quaternion(-5.67359905191407e-15, 1, -1.1920926823449918e-7, 0),
  scale: new Vector3(3.375, 2.53125, 1)
})
imageFromURL3.addComponentOrReplace(transform8)

const imageFromURL4 = new Entity('imageFromURL4')
engine.addEntity(imageFromURL4)
imageFromURL4.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(5, 4, 15),
  rotation: new Quaternion(-5.67359905191407e-15, 1, -1.1920926823449918e-7, 0),
  scale: new Vector3(3.375, 2.53125, 1)
})
imageFromURL4.addComponentOrReplace(transform9)

const imageFromURL5 = new Entity('imageFromURL5')
engine.addEntity(imageFromURL5)
imageFromURL5.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(11.5, 4, 15),
  rotation: new Quaternion(-5.67359905191407e-15, 1, -1.1920926823449918e-7, 0),
  scale: new Vector3(1.8984370231628418, 2.84765625, 0.9999998807907104)
})
imageFromURL5.addComponentOrReplace(transform10)

const imageFromURL6 = new Entity('imageFromURL6')
engine.addEntity(imageFromURL6)
imageFromURL6.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(12, 4, 0.9999995231628418),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.375, 2.53125, 1)
})
imageFromURL6.addComponentOrReplace(transform11)

const imageFromURL7 = new Entity('imageFromURL7')
engine.addEntity(imageFromURL7)
imageFromURL7.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(4.5, 4, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.375, 2.53125, 1)
})
imageFromURL7.addComponentOrReplace(transform12)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(8.5, 0, 15),
  rotation: new Quaternion(-5.7086314875795605e-15, -1, 1.1920928244535389e-7, -1.4901161193847656e-8),
  scale: new Vector3(1, 1, 1)
})
externalLink.addComponentOrReplace(transform13)

const radio = new Entity('radio')
engine.addEntity(radio)
radio.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(9.5, 5.5, 15),
  rotation: new Quaternion(-1, 2.2351747119842003e-8, -2.664535047342139e-15, -1.1920928244535389e-7),
  scale: new Vector3(0.4999999403953552, 0.4999999403953552, 0.9999999403953552)
})
radio.addComponentOrReplace(transform14)

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
script1.spawn(videoStream, {"startOn":true,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream","actionId":"toggle","values":{}}],"image":"https://github.com/thegreatluna8713/thegreatluna8713/blob/c032cee58e6c7de905192f75180a674f0c16d73a/_DSF4969.jpg","customStation":"https://youtu.be/_Zc5WljykHs","onActivate":[{"entityName":"videoStream","actionId":"activate","values":{}}]}, createChannel(channelId, videoStream, channelBus))
script2.spawn(facebookLink, {"url":"shopgakhi","bnw":false,"name":"Visit Us"}, createChannel(channelId, facebookLink, channelBus))
script3.spawn(instagramLink, {"url":"gakhiboutique","bnw":false}, createChannel(channelId, instagramLink, channelBus))
script4.spawn(imageFromURL, {"image":"https://github.com/thegreatluna8713/thegreatluna8713/blob/c032cee58e6c7de905192f75180a674f0c16d73a/_DSF5040.jpg"}, createChannel(channelId, imageFromURL, channelBus))
script4.spawn(imageFromURL2, {"image":"https://github.com/thegreatluna8713/thegreatluna8713/blob/c032cee58e6c7de905192f75180a674f0c16d73a/_DSF4953.jpg"}, createChannel(channelId, imageFromURL2, channelBus))
script4.spawn(imageFromURL3, {"image":"https://github.com/thegreatluna8713/thegreatluna8713/blob/c032cee58e6c7de905192f75180a674f0c16d73a/_DSF4965.jpg"}, createChannel(channelId, imageFromURL3, channelBus))
script4.spawn(imageFromURL4, {"image":"https://github.com/thegreatluna8713/thegreatluna8713/blob/c032cee58e6c7de905192f75180a674f0c16d73a/_DSF4984.jpg"}, createChannel(channelId, imageFromURL4, channelBus))
script4.spawn(imageFromURL5, {"image":"https://github.com/thegreatluna8713/thegreatluna8713/blob/c032cee58e6c7de905192f75180a674f0c16d73a/_DSF5013.jpg"}, createChannel(channelId, imageFromURL5, channelBus))
script4.spawn(imageFromURL6, {"image":"https://github.com/thegreatluna8713/thegreatluna8713/blob/c032cee58e6c7de905192f75180a674f0c16d73a/_DSF4947.jpg"}, createChannel(channelId, imageFromURL6, channelBus))
script4.spawn(imageFromURL7, {"image":"https://github.com/thegreatluna8713/thegreatluna8713/blob/c032cee58e6c7de905192f75180a674f0c16d73a/_DSF4943.jpg"}, createChannel(channelId, imageFromURL7, channelBus))
script5.spawn(externalLink, {"url":"www.gakhi.com","name":"Shop Now"}, createChannel(channelId, externalLink, channelBus))
script6.spawn(radio, {"startOn":false,"volume":1,"onClickText":"Radio On/Off","onClick":[{"entityName":"radio","actionId":"toggle","values":{}}],"customStation":"https://tunein.com/radio/1075-WGCI-Chicago-s28970/"}, createChannel(channelId, radio, channelBus))