import User from '../models/User';

class SessionController {
    store(req, res){
        return res.json({ ok: true })
    }
}

export default new SessionController