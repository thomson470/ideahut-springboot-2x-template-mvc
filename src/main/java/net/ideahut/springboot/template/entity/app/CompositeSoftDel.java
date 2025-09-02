package net.ideahut.springboot.template.entity.app;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import net.ideahut.springboot.annotation.Audit;
import net.ideahut.springboot.entity.EntityAuditSoftDelete;

@Audit
@Entity
@Table(name = "composite_soft_del")
@Setter
@Getter
@SuppressWarnings("serial")
public class CompositeSoftDel extends EntityAuditSoftDelete {
	
	@Id
	@Column(name = "type", nullable = false)
	private Integer type;
	
	@Id
	@Column(name = "code", length = 3, nullable = false)
	private String code;
	
	@Column(name = "name", nullable = false, length = 128)
	private String name;
	
	@Column(name = "description")
	private String description;

	@Column(name = "is_active", nullable = false, length = 1)
	private Character isActive;
	
	public CompositeSoftDel() {}
	
	public CompositeSoftDel(Integer type, String code) {
		this.type = type;
		this.code = code;
	}

	@Override
	public int hashCode() {
		return Objects.hash(code, type);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CompositeSoftDel other = (CompositeSoftDel) obj;
		return Objects.equals(code, other.code) && Objects.equals(type, other.type);
	}
	
}
