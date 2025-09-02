package net.ideahut.springboot.template.entity.app;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.GenericGenerator;

import lombok.Getter;
import lombok.Setter;
import net.ideahut.springboot.annotation.Audit;
import net.ideahut.springboot.entity.EntityAuditSoftDelete;
import net.ideahut.springboot.generator.OdtIdGenerator;

@Audit
@Entity
@Table(
	name = "user_account", 
	indexes = { 
		@Index( name = "idx_user_account__username", columnList = "username")
	}
)
@Setter
@Getter
@SuppressWarnings("serial")
public class User extends EntityAuditSoftDelete {
	
	@Id
	@GeneratedValue(generator = OdtIdGenerator.NAME)
	@GenericGenerator(name = OdtIdGenerator.NAME, strategy = OdtIdGenerator.STRATEGY)
	@Column(name = "user_id", unique = true, nullable = false, length = 64)
	private String userId;
	
	@Column(name = "username", nullable = false, unique = true)
	private String username;
	
	@Column(name = "status", length = 1)
	private Character status;
	
	@Column(name = "description")
	private String description;
	
	
	@Transient
	private UserDetail detail;
	
	public User() {}
	
	public User(String userId) {
		this.userId = userId;
	}

}
