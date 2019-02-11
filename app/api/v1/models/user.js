const pool = require('../../../../config/db')

const register = async (username, password, fullname) => {

}

const findUserByUsername = async (username) => {
    const [results] = await pool.query(
        `
			select usr_id_pk as id,usr_fullname as fullname,usr_password as password,usr_username as username,
			usr_email as email,usr_tel as phone,date(create_date) as register_date,
			rol_name as role
			from mas_user inner join ref_role on rol_id_pk = usr_rol_id_fk
			where usr_username = ?`,
        username
    )

    console.log(results)
    return results
}

const checkHasUser = async (username) => {
	const [rows] = await pool.query(`
	SELECT usr_id_pk, password
	FROM mas_user
	WHERE USR_USERNAME = ?
	`,
    [username]
  )
  return rows
}

module.exports = {
    findUserByUsername,
    checkHasUser
}