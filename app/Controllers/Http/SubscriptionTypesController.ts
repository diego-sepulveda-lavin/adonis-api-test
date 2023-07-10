import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

import SubscriptionType from 'App/Models/SubscriptionType'

export default class SubscriptionTypesController {
  public async index({}: HttpContextContract) {
    return SubscriptionType.all()
  }

  public async store({ request }: HttpContextContract) {
    const newSubscriptionTypeSchema = schema.create({
      name: schema.string({ trim: true }),
    })
    const payload = await request.validate({ schema: newSubscriptionTypeSchema })

    const subscription_type = await SubscriptionType.create(payload)

    return subscription_type
  }

  public async show({ params }: HttpContextContract) {
    return SubscriptionType.findOrFail(params.id)
  }

  public async update({ params, request }: HttpContextContract) {
    const newSubscriptionTypeSchema = schema.create({
      name: schema.string({ trim: true }),
    })
    const payload = await request.validate({ schema: newSubscriptionTypeSchema })

    const subscription_type = await SubscriptionType.findOrFail(params.id)
    subscription_type.name = payload.name
    return subscription_type.save()
  }

  public async destroy({ params }: HttpContextContract) {
    const subscription_type = await SubscriptionType.findOrFail(params.id)

    return subscription_type.delete()
  }
}
