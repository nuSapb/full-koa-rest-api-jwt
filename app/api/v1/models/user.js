const pool = require('../../../../config/db/')


const findUserByUsername = async (username) => {
    const [results] = await pool.query(
        `
			select usr_id_pk as id,usr_fullname as fullname,usr_password as password,usr_username as username,
			usr_email as email,usr_tel as phone,date(create_date) as register_date,
			from master_user
			where usr_username = ?`,
        username
    )

    console.log(results)
    return results
}

const verifyUser = async (username) => {
	const [rows] = await pool.query(`
	SELECT usr_username as username, usr_password as password
	FROM master_user
	WHERE USR_USERNAME = ?
	`,
    [username]
  )
  return rows
}

module.exports = {
    findUserByUsername,
    verifyUser
}