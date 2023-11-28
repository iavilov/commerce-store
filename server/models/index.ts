import { sequelize } from '../config/database';
import User from './User'
import Basket from './Basket'
import BasketDevice from './BasketDevice'
import Device from './Device'
import Type from './Type'
import Brand from './Brand'
import Rating from './Rating'
import DeviceInfo from './DeviceInfo'
import TypeBrand from './TypeBrand'

sequelize.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
});

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo, { as: 'info' });
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand, { through: TypeBrand })
Brand.belongsToMany(Type, { through: TypeBrand })

export {
  User,
  Basket,
  BasketDevice,
  Device,
  Type,
  Brand,
  Rating,
  DeviceInfo,
  TypeBrand
};
