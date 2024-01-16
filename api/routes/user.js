// import { Router } from 'express';
// import { Todo, User } from '../models'


export default function users() {
    const router = Router();

    router
        .get('/:id', async (req, res) => {
            try {
                const user = await User.findOne({
                    where: {
                        id: Number(req.params.id),
                    },
                    include: [
                        {
                            model: Todo,
                            attributes: ['id', 'text']
                        }
                    ]
                });
                res.send(user.toJSON());
            } catch (err) {
                log.error(err);
            }
        })
        // .post('/', async (req, res, next) => {
        //     try {
        //         const model = req.body;
        //         const u = await User.create({
        //             first_name: model.first_name,
        //             last_name: model.last_name,
        //             email: model.email,
        //         });

        //         res.json(u.toJSON());
        //     } catch (e) {
        //         next(e);
        //     }
        // });

    return router;
}