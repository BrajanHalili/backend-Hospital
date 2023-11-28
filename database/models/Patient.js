import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const Patient = sequelize.define('Patients', {
  patient_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
        notEmpty: true
    }
  },
  patient_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        notEmpty: true
    }
  },
  patient_dob: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
        notEmpty: true
    }
  },
  patient_sex: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        notEmpty: true
    }
  },
  patient_address: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        notEmpty: true
    }
  },
  patient_maritial_status: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        notEmpty: true
    }
  },
  patient_phone: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
        notEmpty: true
    }
  },
  patient_email: {
    type: DataTypes.STRING,
    allowNull: true
  }
});


module.exports = Patient;