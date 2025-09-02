package net.ideahut.springboot.template.entity.app;

import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import net.ideahut.springboot.annotation.Audit;
import net.ideahut.springboot.entity.EntityAuditSoftDelete;

@Audit
@Entity
@Table(name = "embedded_soft_del")
@Setter
@Getter
@SuppressWarnings("serial")
public class EmbeddedSoftDel extends EntityAuditSoftDelete {
	
	@EmbeddedId
	@AttributeOverride(name = "type", column = @Column(name = "type", nullable = false))
	@AttributeOverride(name = "code", column = @Column(name = "code", nullable = false))
	private EmbededId id;
	
	@Column(name = "name", nullable = false, length = 128)
	private String name;
	
	@Column(name = "description")
	private String description;

	@Column(name = "is_active", nullable = false, length = 1)
	private Character isActive;
	
	public EmbeddedSoftDel() {}
	
	public EmbeddedSoftDel(EmbededId id) {
		this.id = id;
	}
	
}
